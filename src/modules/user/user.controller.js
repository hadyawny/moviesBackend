import jwt from "jsonwebtoken";
import { userModel } from "../../../database/models/user.model.js";
import bcrypt from "bcrypt";
import { catchError } from "../../middleware/catchError.js";
import { deleteOne, getAllOne, getSingleOne } from "../handler/handlers.js";

const addUser = catchError(async (req, res,next) => {

  let user = new userModel(req.body)
  await user.save()
  res.json({ message: "success" , user: {name: user.name , email: user.email} })
})
const updateUser = catchError(async (req, res,next) => {

  let user = await userModel.findByIdAndUpdate(req.user._id, req.body,{new: true})
  !user && res.status(404).json({ message: "user not found" });
  user && res.json({ message: "success", user });
})

const getAllUsers = getAllOne(userModel);

const getSingleUser = getSingleOne(userModel);

const deleteUser = catchError(async (req, res,next) => {
    let user = await userModel.findByIdAndDelete(req.user._id);
    !user && res.status(404).json({ message: "user not found" });
    user && res.json({ message: "success", user });
  });

  const addToFav = catchError(async (req, res, next) => {
    const { movieId } = req.body;
    if (!movieId) {
      return res.status(400).json({ message: "Movie ID is required" });
    }
  
    let user = await userModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  
    if (!user.favMovies.includes(movieId)) {
      user.favMovies.push(movieId);
      await user.save();
    }
  
    res.json({ message: "success", favMovies: user.favMovies });
  });



  const removeFromFav = catchError(async (req, res, next) => {
    const { movieId } = req.body;
    if (!movieId) {
      return res.status(400).json({ message: "Movie ID is required" });
    }
  
    let user = await userModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  
    const movieIdNumber = Number(movieId);
    user.favMovies = user.favMovies.filter(id => id !== movieIdNumber);
    await user.save();
  
    res.json({ message: "success", favMovies: user.favMovies });
  });
  


export { addUser ,getAllUsers , getSingleUser ,deleteUser,updateUser ,addToFav ,removeFromFav};
