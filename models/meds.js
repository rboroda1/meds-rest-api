const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create med Schema and model
const MedSchema = new Schema({
  genericName: {
    type: String,
    required: [true, "Name is required."],
  },
  tradeName: {
    type: String,
    required: [false, "Can be multiple."],
  },
  target: {
    type: String,
    required: [true],
  },
  medClass: {
    type: String,
    required: [true],
  },
  affectedAreas: {
    type: String,
    required: [true],
  },
  riskInfections: {
    type: String,
    required: [true],
  },
  //add more properties
});

const Med = mongoose.model("med", MedSchema);

//Export Med model to be used in other programs
module.exports = Med;
