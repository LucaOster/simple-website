
const RB_SERVER = "http://127.0.0.1";

module.exports = {
  SOCKET_SUCCESS: "ok",
  WATCH_DOG_INTERVAL: 2000,
  MAX_WATCH_DOG_COUNT: 30,
  TYPING_LIFE_COUNT_LIMIT: 2,
  SERVER_UPDATE_INTERVAL: 60000,

  RB_LOGIN_URL: RB_SERVER + "/oauth/user_credentials",
  RB_RESOURCE_URL: RB_SERVER + "/oauth/resource",
  RB_RESOURCE_USERS_URL: RB_SERVER + "/oauth/resource/get_users",

  UPLOAD_PATH: "files/",

  MESSAGE_LIMIT_PER_PAGE: 50,
  TOKEN_EXPIRE_TIME: '1d'
}