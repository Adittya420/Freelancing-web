const mongoose = require('mongoose');
const { Schema } = mongoose;

const GigsSchema = new Schema({
    sellerlevel:{
        type: String,
        required: true
    },
    averagerating:{
        type: Number,
        required: true
    },
    numberofreviewers:{
        type: Number,
       required:true,
    },
    price:{
        type: Number,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    hourlyrate:{
        type: Number,
       required:true,
    },
    jobsuccess:{
        type: Number,
        required: true
    },
    locality:{
        type: String,
        required: true
    },
    name:{
        type: String,
       required:true,
    },
    skills:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true
    },

  });
  const Gigs = mongoose.model('gigs', GigsSchema);
  module.exports = Gigs;