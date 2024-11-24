const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    Description:String,
    image:{
         url:String,
         filename:String,

    },
    price:Number,
    country:String,
    location:String,
    reviews:[{
        type: Schema.Types.ObjectId,
        ref:"Review",
    },
],
    owner:{ // user schema ko refer karega
        type: Schema.Types.ObjectId,
        ref:"User",
},
});

// check karega listing ko agar vo delete hoga to saare reviews bhi delete ho jayenge uss lisitng id ke 
listingSchema.post("findOneAndDelete",async(listing)=>{  
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}})
    }
       
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports=Listing; 