const express =require('express');
const app=express();
const randevuRoutes=require('./src/routes/randevuRoutes') 
require('./src/db/db');
const port=4000;


app.use(express.json());

app.use('/api',randevuRoutes);



app.listen(port,()=>{
    console.log("web servis",port,"çalışıyor");
})