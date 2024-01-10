require('dotenv').config()
const jwt = require('socketio-jwt');
const engine = require('../utils/engine');
const config = require('../config');
const userinfo = require('../utils/userinfo');
const middleware = require('socketio-wildcard')();
var socket_io = null;

const usesokcet = (io) => {
  socket_io = io;
  io.use(jwt.authorize({
    secret: process.env.SECRET_KEY,
    handshake: true
  }));
  io.use(middleware);
  io.on('connection', onconnect);
  setInterval(watch_dog_func, config.WATCH_DOG_INTERVAL);
}

module.exports = usesokcet;

const watch_dog_func = () => {
  const typing_limit = config.MAX_WATCH_DOG_COUNT - config.TYPING_LIFE_COUNT_LIMIT;
  for (var i in userinfo.uinfos) {
    const uinfo = userinfo.uinfos[i];
    const user_id = Number(i);
    if (uinfo.status !== 1)
      continue;
    uinfo.watch_dog--;
    if (uinfo.typing_at && uinfo.watch_dog <= typing_limit) {
      engine.getRoomMembers(uinfo.typing_at)
        .then(room => {
          sendToRoom("typing:down", room, {user_id, room_id: uinfo.typing_at, is_typing: false}, user_id);
          uinfo.typing_at = null;
        })
        .catch(console.log)
    }
    if (uinfo.watch_dog <= 0) {
      uinfo.status = 3;
      broadcastUinfo(user_id);
    }
  }
}

const sendToRoom = (event, room, data, except = null) => {
  for (var i = 0; i < room.members.length; i++) {
    const member_id = room.members[i].user_id;
    if (!userinfo.uinfos[member_id])
      continue;
    const member_socket = userinfo.uinfos[member_id].socket;
    if (member_id !== except && member_socket && member_socket.connected) {
      member_socket.emit(event, data);
    }
  }
}

const sendToUser = (event, user_id, data) => {
  if (!userinfo.uinfos[user_id])
      return;
  const user_socket = userinfo.uinfos[user_id].socket;
  if (user_socket && user_socket.connected)
    user_socket.emit(event, data);
}

const sendToAll = (event, data, except = null) => {
  socket_io.emit(event, data);
}

const broadcastUinfo = (user_id) => {
  sendToAll("uinfo:down", {user_id, uinfo: userinfo.getOneReducedInfo(user_id)});
}

const onconnect = (socket) => {

  const user_id = socket.decoded_token.user_id;

  const log_func = (log_msg, tag = null) => {
    var log = "[u"+ user_id +"]";
    if (tag) log += "[" + tag + "]";
    log += " "+log_msg;
    console.log(log);
  }

  log_func("connected");
  userinfo.connectUserInfo(user_id, socket);
  broadcastUinfo(user_id);
  socket.on('disconnect', function() {
    log_func("disconnected");
    userinfo.disconnectUserInfo(user_id);
    broadcastUinfo(user_id);
  });

  socket.on('*', (packet) => {
    if (userinfo.refreshUserInfo(user_id))
      broadcastUinfo(user_id);
  });

  socket.on("test", (msg, fn) => {
    log_func(msg, "test");
    if (fn) fn({msg: config.SOCKET_SUCCESS});
  })

  socket.on("msg:up", (data, fn) => {
    log_func("New mssage arrived.", "msg:up");
    engine.addNewMessage(data.room_id, data.message)
      .then(room => {
        sendToRoom("msg:down", room, data);
        if (fn) fn({msg: config.SOCKET_SUCCESS});
      })
      .catch(error => {
        console.log(data, error);
        if (fn) fn({msg: error});
      })
  })

  socket.on("room:up", (data, fn) => {
    log_func("New room is created.", "room:up");
    engine.addNewRoom(data.room)
      .then(new_room => {
        sendToRoom("room:down", new_room, {room: new_room});
        if (fn) fn({msg: config.SOCKET_SUCCESS, data: {new_room_id: new_room._id}});
      })
      .catch(error => {
        console.log(data, error);
        if (fn) fn({msg: error});
      })
  })

  socket.on("readat:up", (data, fn) => {
    log_func("Updating read point.", "readat:up");
    data.time = new Date();
    engine.updateReadAt(data.room_id, user_id, data.time)
      .then(room => {
        data.user_id = user_id;
        sendToRoom("readat:down", room, data);
        if (fn) fn({msg: config.SOCKET_SUCCESS});
      })
      .catch(error => {
        console.log(data, error);
        if (fn) fn({msg: error});
      })
  })
  
  socket.on("typing:up", (data, fn) => {
    log_func("Typing", "typing:up");
    engine.getRoomMembers(data.room_id)
      .then(room => {
        userinfo.setUserTyping(user_id, data.room_id);
        sendToRoom("typing:down", room, {user_id, room_id: data.room_id, is_typing: true}, user_id);
        if (fn) fn({msg: config.SOCKET_SUCCESS});
      })
      .catch(error => {
        console.log(data, error);
        if (fn) fn({msg: error});
      })
  })

  socket.on("more:up", (data, fn) => {
    log_func("More messages", "more:up");
    engine.getMessages(data.room_id, data.position, data.count)
      .then(messages => {
        sendToUser("more:down", user_id, {messages, room_id: data.room_id});
        if (fn) fn({msg: config.SOCKET_SUCCESS});
      })
      .catch(error => {
        console.log(data, error);
        if (fn) fn({msg: error});
      })
  })
}
