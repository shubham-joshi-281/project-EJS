import express from "express";
import userController from "../controller/usercontroller.js";

const userRoutes = express.Router();

userRoutes.get("/", userController.home);
userRoutes.get("/registration", userController.registration);
userRoutes.post("/registration", userController.createUser);
userRoutes.get("/login", userController.login);
userRoutes.post("/login", userController.veryfyLogin);
// userRoutes.get("/dashbord", userController.dashBord);
userRoutes.get("/dashbord", userController.dashBord);

export default userRoutes;
