import { model, Schema } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
});

export default model("Task", taskSchema);
