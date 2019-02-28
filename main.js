var mongoose = require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var Book=mongoose.model('Book',schema,'book');

var book1=new Book({
    title:"Salvese quien pueda",
    author:"Andres Oppenheimer",
    body:"Libro interesante"
});

Book.create(book1,err=>{
    if (err){
        console.log(err);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0);
});