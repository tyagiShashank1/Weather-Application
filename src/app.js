const express=require('express');
const app=express();
const path=require('path');//requiring path module for including our static website files 
const port=8000;
// const port=process.env.PORT || 3000; (for hosting purposes)
const hbs=require('hbs');//requiring our template engine
const staticPath=path.join(__dirname,'../public'); //public static path
const templatePath=path.join(__dirname,'../templates/views'); //views directory path
const partialsPath=path.join(__dirname,'../templates/partials');//partials directory path


//setting our view engine
app.set("view engine","hbs");
//setting our views directory path
app.set('views',templatePath);
//setting our partials path
hbs.registerPartials(partialsPath);
// setting static path to include our static website files.
app.use(express.static(staticPath));


//Routing
app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("*",(req,res)=>{
    res.render('404',{
        errormessage:"Oops Page Not Found!",
    })
});
app.listen(500,()=>{
    console.log("listened");
})
