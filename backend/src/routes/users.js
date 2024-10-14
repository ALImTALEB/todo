import express from "express";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

const usersRoutes = express.Router();

// /api/users/register
usersRoutes.post(
  "/register",
  [
    check("firstName", "First name is required").isString(),
    check("lastName", "Last name is required").isString(),
    check("email", "Email name is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
    try {
      let user = await User.findOne({
        email: req.body.email,
      });

      if (user) {
        return res.status(400).json({ message: "user already exists" });
      }

      user = new User(req.body);
      await user.save();

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });

      res.cookie("imax_auth", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "something went wrong" });
    }
  }
);

export default usersRoutes;
