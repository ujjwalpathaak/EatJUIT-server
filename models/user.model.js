import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userEnrolmentNumber: {
      type: String,
    },
    userName: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    userContactNumber: {
      type: String,
    },
    userPassword: {
      type: String,
    },
    userRoomNumber: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);

export default user;