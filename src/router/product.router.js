const router= require ('express').Router()


router.get("/products", (req,res)=>{
    res.send("I am Router")
})


module.exports=router;