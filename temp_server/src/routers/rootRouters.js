import express from "express";
import { home } from "../controllers/vmController";
import {
  getJoin,
  getLogin,
  getLogout,
  postJoin,
  postLogin,
} from "../controllers/userController";
import {
  hostPetHotestGetHost,
  testGetHost,
  testGetVMList,
  testHostInfo,
} from "../tests/Test";
import { localsMiddleware, protectorMiddleware } from "../middlewares";
import { testGetVM } from "../controllers/cloudData";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/logout", getLogout);
rootRouter.route("/test").all(protectorMiddleware).get(testGetHost);
rootRouter.route("/test/page").get(testHostInfo);

//
//Test 코드
rootRouter.get("/test/host", testGetVM);

export default rootRouter;
