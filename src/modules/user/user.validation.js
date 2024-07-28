import Joi from "joi";

const addUserVal = Joi.object({
  userName: Joi.string().min(2).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
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

  movieId: Joi.number().integer().positive().required()
});
const removeFromFavVal = Joi.object({

  movieId: Joi.number().integer().positive().required()
});

export { addUserVal, paramsIdVal, updateUserVal , addToFavVal ,removeFromFavVal };
