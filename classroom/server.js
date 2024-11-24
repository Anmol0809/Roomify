const express=require("express");
const app=express();
const users= require("./routes/user.js");
const posts= require("./routes/post.js");
const session = require("express-session");
const flash=require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

// const cookieParser = require("cookie-parser");
// // app.use(cookieParser());
// app.use(cookieParser("secretcode"))

// app.get("/getsignedcookie",(req,res)=>{
//     res.cookie("made-in","India", {signed:true});
//     res.send("signed cookie sent!");
// });
// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// });

// app.get("/getcookies",(req,res)=>{
//  res.cookie("greet", "hello");
//  res.cookie("madeIn","india");
//  res.send("sent you some cookies");
// });

// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("chin dabak dum dum!");
// });

// //users-route
// app.use("/users",users); // / ko comapre karenge users wale route se 


// //Posts-route
// app.use("/posts", posts);
const sessionOptions = {
secret: "mysupersecretstring" , resave:false , saveUninitialized:true,
};
app.use(session(sessionOptions));
app.use(flash());

app.get("/register",(req,res)=>{
    let {name="anonymous"}= req.query;
    req.session.name=name;
    console.log(req.session.name);
    req.flash("success","degree completed successfully");
    // res.send(name);
    res.redirect("/hello");
});

app.get("/hello",(req,res)=>{
    // res.send(`hello ${req.session.name}`);
    res.locals.msg = req.flash("success"); //sidha template me chala jayega
    res.render("page.ejs" , {name:req.session.name});
});

// app.get("/requestcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;

//     }
//     else{
//         req.session.count=1;

//     }
   

//     res.send(`you send a request ${req.session.count} times`);
// });

// app.get("/test",(req,res)=>{
//     res.send("test successful");
// });


//port
app.listen(3000,()=>{
    console.log("server is listning to 3000");
});
