import { globalError } from "../middleware/globalError.js";
import authRouter from "./auth/auth.routes.js";
import userRouter from "./user/user.routes.js";

export const bootstrap = (app) => {

  // app.use("/api/v1/brands",brandRouter);
  app.use("/api/v1/users",userRouter);
  app.use("/api/v1/auth",authRouter);



  app.get('/',(req,res)=>res.send("Welcome to movies API please select any of available Endpoints"))

  app.use(globalError);
};
