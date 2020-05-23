import { Router } from "express";

import tasksController from "../controllers/tasks.controller";

class RoutesTasks {
  public router: Router = Router();

  constructor() {
    this.router.get("/create", tasksController.createTaskView);
    this.router.post("/create", tasksController.createTask);
    this.router.get("/list", tasksController.listTasksView);
    this.router.get("/delete/:id", tasksController.deleteTask);
    this.router.get("/edit/:id", tasksController.updateTaskView);
    this.router.post("/edit/task/:id", tasksController.updateTask);
  }
}

export const routerTask = new RoutesTasks();
