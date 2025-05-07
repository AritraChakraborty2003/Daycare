import mongoose from "mongoose";

const TimingSchema = new mongoose.Schema({
  time: String,
  slot: String,
});

export default mongoose.model("Timing", TimingSchema);
