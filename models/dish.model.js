import mongoose from "mongoose";

const dishSchema = new mongoose.Schema(
  {
    dishId: {
      type: String,
    },
    dishName: {
      type: String,
    },
    dishPrice: {
      type: String,
    },
    dishPhoto: {
      type: String,
    },
    restrauntNameDish: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const dish = mongoose.model("dish", dishSchema);

export default dish;