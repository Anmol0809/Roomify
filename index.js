if(process.env.NODE_ENV != "production"){ // .env file upload nhi hogi
    require("dotenv").config();
}

const express=require("express");
const app=express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport=require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


// const MONGO = "mongodb://127.0.0.1:27017/wondering";
const dbUrl = process.env.ATLASDB_URL;

main().then(()=>{
    console.log("connect to db");
}).catch((err)=>{
    console.log(err);
}); 
async function main(){
    await mongoose.connect(dbUrl);
}

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions={
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    },
};

// app.get("/",(req,res)=>{
//     res.send("good");
// });


app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
   res.locals.success = req.flash("success");
   res.locals.error = req.flash("error");
   res.locals.currUser = req.user;
//    console.log(res.locals.success);
   next();
});

// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User({
//         email:"ravish123@gmail.com",
//         username:"Ravish",
//     });

//    let registerdUser = await User.register(fakeUser, "helloworld");
//    res.send(registerdUser);
// });

// lisitngs route
app.use("/listings", listingRouter);
//reviews - route
app.use("/listings/:id/reviews", reviewRouter);
//user - route
app.use("/",userRouter);


// app.get("/test",async(req,res)=>{
//    let sampleListing = new Listing({
//     title:"My home",
//     Description:"By the darkside",
//     price:1200,
//     location:"baddi, HP",
//     country:"INDIA",
//    });

//    await sampleListing.save();
//    console.log("saved");
//    res.send("db running");
// });

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page Not Found"));
});

app.use((err,req,res,next)=>{
    let{statusCode=500, message="Oops.. Something went wrong!"} = err;
    res.status(statusCode).render("error.ejs",{message});
    // res.status(statusCode).send(message);
});

app.listen(8080,()=>{
    console.log("listning on 8080");
});

