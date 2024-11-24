const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing=require("../models/listing.js");

const MONGO = "mongodb://127.0.0.1:27017/wondering";

main().then(()=>{
    console.log("connect to db");
}).catch((err)=>{
    console.log(err);
}); 
async function main(){
    await mongoose.connect(MONGO);
}

const initdb = async ()=>{
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj)=> ({...obj, owner:"66ebc25684662fadc60801a5"}));
    await Listing.insertMany(initdata.data);
    console.log("data was initialized ");

};

initdb();














