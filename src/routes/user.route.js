import { Router } from "express";

import {
    getUsers,
    getUserById,
    getUsersByTitle,
    deleteUsersById,
    deleteAllUsers,
    editUserById,
    createUser
} from "../controllers/user.controller.js";


const router = Router();

router.get("/", getUsers);
router.get("/?title", getUsersByTitle);
router.get("/:id", getUserById);
router.delete("/:id", deleteUsersById);
router.delete("/", deleteAllUsers);
router.patch("/:id", editUserById);
router.post("/", createUser);

export default router;
