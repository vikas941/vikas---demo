const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
.then(() => {
    console.log("connected to db");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/piyush");
    
}

const initDB = async() => {
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({...obj, owner: "67c2980b1724e70b7e5a9da4"}));
   await Listing.insertMany(initData.data);
   console.log("data was initialized");
};

initDB();
      

      
