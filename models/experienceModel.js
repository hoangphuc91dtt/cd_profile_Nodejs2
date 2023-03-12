const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ExperienceSchema = new Schema({
    title: { type: String },
    job: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String },
});

var ExperienceModel = mongoose.model("experience", ExperienceSchema);

module.exports = ExperienceModel;
