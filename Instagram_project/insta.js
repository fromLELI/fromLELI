const  express = require("express");
const app = express();

const dir_p = "C:/Users/andre/Documents/pyweb/Instagram_project/"

app.use(express.static(dir_p+'/'));

app.get("/",function(req,res){

    res.sendFile(dir_p+"index.html")
});

app.listen(7777);