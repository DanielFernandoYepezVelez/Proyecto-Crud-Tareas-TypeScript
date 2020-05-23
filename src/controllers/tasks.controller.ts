import { Request, Response } from "express";

import Task from "../models/Task";

class TasksController {
  public async createTaskView(req: Request, res: Response): Promise<void> {
    res.render("tasks/create");
  }

  public async createTask(req: Request, res: Response): Promise<void> {
    const { title, description } = req.body;

    const task = new Task({
      title,
      description,
    });

    await task.save();
    res.redirect("/task/list");
  }

  public async listTasksView(req: Request, res: Response): Promise<void> {
    const tasks = await Task.find();
    res.render("tasks/list", { tasks });
  }

  listTask() {}

  public async updateTaskView(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render("tasks/edit", { task });
  }

  public async updateTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { title, description } = req.body;

    await Task.findByIdAndUpdate(id, { title, description });
    res.redirect("/task/list");
  }

  public async deleteTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/task/list");
  }
}

const tasksController = new TasksController();
export default tasksController;
