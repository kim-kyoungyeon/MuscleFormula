const emaillogin = require("../controllers/login/emailLogin");
const signup = require("../controllers/login/signup");
const logout = require("../controllers/login/logout");
const google = require("../controllers/login/googleOauth");

import express from "express";
const loginrouter = express.Router();

loginrouter.get("/login", emaillogin);
loginrouter.post("/signup", signup);
loginrouter.post("/logout", logout);
loginrouter.get("/googleoauth", google);

export default loginrouter;