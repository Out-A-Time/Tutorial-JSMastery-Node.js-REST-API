import { v4 as uuidv4 } from "uuid";

import express from "express";

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

// All routes here are starting with '/users'
// GET ALL
router.get("/", getAllUsers);
// GET BY ID - WHY RETURNS OBJECT OBJECT????
router.get("/:id", getUserById);
//POST REQUEST
router.post("/", createUser);
// DELETE
router.delete("/:id", deleteUser);
//PATCH
router.patch("/:id", updateUser);

export default router;
