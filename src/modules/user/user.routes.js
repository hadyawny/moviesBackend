import express from "express";
import { validation } from "../../middleware/validation.js";
import { addToFav, addUser, deleteUser, getAllUsers, getSingleUser, removeFromFav, updateUser } from "./user.controller.js";
import { addToFavVal, addUserVal, paramsIdVal, removeFromFavVal, updateUserVal } from "./user.validation.js";
import { checkEmail } from "../../middleware/emailExist.js";
import { protectedRoutes } from "../auth/auth.controller.js";

const userRouter = express.Router();

userRouter.route("/")
.post(validation(addUserVal),checkEmail,addUser)
.get(getAllUsers)
.put(protectedRoutes,validation(updateUserVal),updateUser)
.delete(protectedRoutes,deleteUser)

userRouter.route("/:id")
.get(validation(paramsIdVal),getSingleUser)

userRouter.route("/addToFav")
.put(validation(addToFavVal),addToFav)

userRouter.route("/removeFromFav")
.put(validation(removeFromFavVal),removeFromFav)

export default userRouter;
