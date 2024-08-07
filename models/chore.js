import mongoose, { Schema } from "mongoose";

const choreSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Chore = mongoose.models.Chore || mongoose.model("Chore", choreSchema);

export default Chore;
