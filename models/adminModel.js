const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'enter your emaill address'],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Enter a password'],
      minlength: [6, 'Please enter at least six characters'],
    },
  },
  { timestamps: true, }
);

const AdminModels = mongoose.model('Admin', adminSchema);

module.exports = AdminModels;
  