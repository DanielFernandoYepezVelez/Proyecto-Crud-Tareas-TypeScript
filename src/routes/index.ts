import { Router } from "express";

import indexController from "../controllers/index.controller";

class RoutesApp {
  public router: Router = Router();

  constructor() {
    this.router.get("/", indexController.index);
  }
}

export const routerIndex = new RoutesApp();
