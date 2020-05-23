"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = __importDefault(require("../models/Task"));
class TasksController {
    createTaskView(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render("tasks/create");
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description } = req.body;
            const task = new Task_1.default({
                title,
                description,
            });
            yield task.save();
            res.redirect("/task/list");
        });
    }
    listTasksView(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield Task_1.default.find();
            res.render("tasks/list", { tasks });
        });
    }
    listTask() { }
    updateTaskView(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const task = yield Task_1.default.findById(id);
            res.render("tasks/edit", { task });
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, description } = req.body;
            yield Task_1.default.findByIdAndUpdate(id, { title, description });
            res.redirect("/task/list");
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield Task_1.default.findByIdAndDelete(id);
            res.redirect("/task/list");
        });
    }
}
const tasksController = new TasksController();
exports.default = tasksController;
