const mongoose = require("mongoose");
const { schema } = mongoose;

const NotesSchema = new schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema);
