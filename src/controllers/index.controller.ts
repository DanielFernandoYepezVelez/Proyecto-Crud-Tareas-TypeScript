import { Request, Response } from "express";

class IndexController {
  public async index(req: Request, res: Response): Promise<void> {
    res.render("index");
  }
}

const indexController = new IndexController();
export default indexController;
