"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTask = void 0;
const express_1 = require("express");
const tasks_controller_1 = __importDefault(require("../controllers/tasks.controller"));
class RoutesTasks {
    constructor() {
        this.router = express_1.Router();
        this.router.get("/create", tasks_controller_1.default.createTaskView);
        this.router.post("/create", tasks_controller_1.default.createTask);
        this.router.get("/list", tasks_controller_1.default.listTasksView);
        this.router.get("/delete/:id", tasks_controller_1.default.deleteTask);
        this.router.get("/edit/:id", tasks_controller_1.default.updateTaskView);
        this.router.post("/edit/task/:id", tasks_controller_1.default.updateTask);
    }
}
exports.routerTask = new RoutesTasks();
