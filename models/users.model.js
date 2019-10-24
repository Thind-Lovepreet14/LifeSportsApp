const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    lastName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 2
    },
    gender: {
      type: String,
      requied: true,
      trim: true
    },
    age: {
      type: Number,
      required: true,
      trim: true,
      minlength: 1
    },
    position: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    },
    height: {
      type: Number,
      required: true,
      trim: true,
      minlength: 1
    }
  },
  {
    timestamps: true
  }
);

const Player = mongoose.model("player", playerSchema);

module.exports = Player;
