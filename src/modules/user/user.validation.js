import Joi from "joi";

const addUserVal = Joi.object({
  userName: Joi.string().min(2).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).message('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character')
    .required(),
  rePassword: Joi.valid(Joi.ref("password")).required(),
});

const paramsIdVal = Joi.object({
  id: Joi.string().hex().length(24).required(),
});

const updateUserVal = Joi.object({

  userName: Joi.string().min(2).max(20),

});

const addToFavVal = Joi.object({

  movieId: Joi.string().min(2).max(100).required(),
  userId: Joi.string().min(2).max(100).required(),
});
const removeFromFavVal = Joi.object({

  movieId: Joi.string().min(2).max(100).required(),
  userId: Joi.string().min(2).max(100).required(),

});

export { addUserVal, paramsIdVal, updateUserVal , addToFavVal ,removeFromFavVal };
