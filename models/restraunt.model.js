import mongoose from "mongoose";

const restrauntSchema = new mongoose.Schema(
  {
    restrauntId: {
      type: String,
    },
    restrauntPhoto: {
      type: String,
    },
    restrauntRating: {
      type: String,
    },
    restrauntLocation: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const restraunt = mongoose.model("restraunt", restrauntSchema);

export default restraunt;