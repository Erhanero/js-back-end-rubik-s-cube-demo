const mongoose = require("mongoose");

async function initDataBase() {
    try {
        await mongoose.connect("mongodb://localhost:27017/cubes");

    } catch (err) {
        console.log(err.message);
    }

}

module.exports = initDataBase;