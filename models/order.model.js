import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
    },
    orderItems: {
      type: String,
    },
    restrauntNameOrder: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const order = mongoose.model("order", orderSchema);

export default order;