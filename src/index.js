const app = require("./app/app.js");

const port= process.env.PORT || 3001;


app.listen(port, ()=>{
    console.log(`server corriendo en puerto ${port}`);
})