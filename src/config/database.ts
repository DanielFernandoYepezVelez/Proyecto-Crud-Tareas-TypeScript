import mongoose from "mongoose";

class DatabaseConnect {
  constructor() {
    this.connect();
  }

  public async connect(): Promise<void> {
    mongoose
      .connect("mongodb://localhost/tsc_crud_completed", {
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then((db) => console.log(">>> DB Is Connected"))
      .catch((err) => console.log(err));
  }
}

const db = new DatabaseConnect();
export default db;
