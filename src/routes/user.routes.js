require('rootpath')();
const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

function getUser(req, res) {
  userService.getUser(req, res);
}

function getUsers(req, res) {
    userService.getUsers(req, res);
  }

router.get('/:username', getUser);
router.get('/', getUsers);

module.exports = router;
