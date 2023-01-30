const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
mongoose.connect("mongodb://localhost/my_database",{useNewUrlParser: true});

// Crud Operations using Node Js in test file
// Before doing any crud operations, just remember that after installing mongoose in the app directory, you need to create a model folder in which, you need to create a BlogPost.js file in which you need to create the schema as shown in the BlogPost.js file.

// To create a query in data base
BlogPost.create({
    title:'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:'
},(error,blogPost)=>{
    console.log(error,blogPost);
});


// To find a query in database
BlogPost.find({
    title:'The Mythbuster’s Guide to Saving Money on Energy Bills'
},(error,blogspot) =>{
    console.log(error,blogspot);
});

// Or, to find all documents in BlogPosts collection with ‘ The ’ in the title, we do:
// BlogPost.find({
// title:/The/}, (error, blogspot) =>{
// console.log(error,blogspot)
// })

// To find data using find by id method
// var id = "5cb436980b33147489eadfbb";
// BlogPost.findById(id, (error, blogspot) =>{
// console.log(error,blogspot)
// })

// Updating records
var id = "636e3a8c0882a6de9b4c6ca8";
BlogPost.findByIdAndUpdate(id,{
    title:"Updated title"
},(error,blogspot)=>{
    console.log(error,blogspot);
});

// Deleting single record
var id2 = "636e3c567cf0fcb74fac5480";
BlogPost.findByIdAndDelete(id2,(error,blogspot)=>{
    console.log(error,blogspot);
}) 