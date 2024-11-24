const express=require("express");
const router = express.Router();



// index
router.get("/",(req,res)=>{
    res.send("GET says chin dabak dum dum");
});
//show
router.get("/:id",(req,res)=>{
    res.send("GET says show chin dabak dum dum");
});

//post
router.post("/",(req,res)=>{
    res.send("POST says chin dabak dum dum");
});

//delete
router.delete("/:id",(req,res)=>{
    res.send("Delete ho gya chin dabak dum dum");
});

module.exports=router;