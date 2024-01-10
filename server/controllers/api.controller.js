require('dotenv').config()
var User = require('../models/user.model');


async function getAll(req, res) {
  const user_id = req.user.user_id;
  
  var users;
  try {
    users = await User.find({});
  }
  catch(error) {
    res.status(250).json({
      "message": "Can not access to the server."
    });
    return;
  }
  const cnt = config.MESSAGE_LIMIT_PER_PAGE;
  const rooms = await Room.aggregate([
    {$match: { members: { $elemMatch: { user_id: user_id } } }},
    {$addFields: {msg_count: {$size: '$messages'}, messages: {$slice: ["$messages", -cnt,  cnt]}}},
  ]);
  for (var i = 0; i < rooms.length; i++) {
    rooms[i].msg_count = rooms[i].msg_count - rooms[i].messages.length;
  }
  const me = users.find(user => user.user_id == user_id);
  const uinfos = userinfo.getReducedInfos();
  
  res.status(200).json({users, rooms, me, uinfos});
}

var multer  = require('multer')
var upload = multer({ dest: 'public/' + config.UPLOAD_PATH }).single('file');

function postFile(req, res) {
  
  upload(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        console.log("The file size is too big!");
        res.status(200).json({
          success: false,
          message: "File Size Limit",
        });
      } else {
        console.log(err);
        res.status(200).json({
          success: false,
          message: "Upload Failed",
        });
      }
    }
    else {
      res.status(200).json({
        success: true,
        path: config.UPLOAD_PATH + req.file.filename
      })
    }    
  })
}


module.exports = { getAll, postFile };
