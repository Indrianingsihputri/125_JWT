const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = db.User;

async function register(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email dan password wajib diisi."
      });
    }

    