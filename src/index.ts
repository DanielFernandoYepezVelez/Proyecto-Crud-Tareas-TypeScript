import "./config/database";

import express, { Application } from "express";
import exphbs from "express-handlebars";
import Handlebars from "handlebars";
import morgan from "morgan";
import path from "path";

import { routerIndex } from "./routes/index";

class Sever {
  app: Application;

  constructor() {
    this.app = express();
    this.init();
  }

  public init(): void {
    this.settings();
    this.middlewares();
    this.routes();
    this.staticFiles();
  }

  /* Settings */
  public settings(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.set("views", path.join(__dirname, "views"));
    this.app.engine(
      ".hbs",
      exphbs({
        defaultLayout: "main",
        extname: ".hbs",
        layoutsDir: path.join(this.app.get("views"), "layouts"),
        partialsDir: path.join(this.app.get("views"), "partials"),
      })
    );
    this.app.set("view engine", ".hbs");
  }

  /* Middlewares */
  public middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan("dev"));
  }

  /* Routes */
  public routes(): void {
    this.app.use(routerIndex.router);
  }

  /* Static Files */
  public staticFiles(): void {
    this.app.use(express.static(path.join(__dirname, "./public")));
  }

  /* Server The Starting */
  public start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server On Port ${this.app.get("port")}`);
    });
  }
}

const server = new Sever();
console.log(server.start());
