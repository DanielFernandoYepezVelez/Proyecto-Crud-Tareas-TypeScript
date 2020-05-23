"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/database");
const express_1 = __importDefault(require("express"));
const handlebars_1 = __importDefault(require("handlebars"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const allow_prototype_access_1 = require("@handlebars/allow-prototype-access"); /* Importante para poder renderizar los datos en las vistas .hbs, se necesita por que el código es compilado */
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const index_1 = require("./routes/index");
const tasks_1 = require("./routes/tasks");
class Sever {
    constructor() {
        this.app = express_1.default();
        this.init();
    }
    init() {
        this.settings();
        this.middlewares();
        this.routes();
        this.staticFiles();
    }
    /* Settings */
    settings() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.set("views", path_1.default.join(__dirname, "views"));
        this.app.engine(".hbs", express_handlebars_1.default({
            defaultLayout: "main",
            extname: ".hbs",
            layoutsDir: path_1.default.join(this.app.get("views"), "layouts"),
            partialsDir: path_1.default.join(this.app.get("views"), "partials"),
            handlebars: allow_prototype_access_1.allowInsecurePrototypeAccess(handlebars_1.default) /* Importante para poder renderizar los datos en las vistas .hbs, se necesita por que el código es compilado */,
        }));
        this.app.set("view engine", ".hbs");
    }
    /* Middlewares */
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(morgan_1.default("dev"));
    }
    /* Routes */
    routes() {
        this.app.use(index_1.routerIndex.router);
        this.app.use("/task", tasks_1.routerTask.router);
    }
    /* Static Files */
    staticFiles() {
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "./public")));
    }
    /* Server The Starting */
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server On Port ${this.app.get("port")}`);
        });
    }
}
const server = new Sever();
console.log(server.start());
