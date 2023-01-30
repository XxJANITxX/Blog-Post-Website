module.exports = (req,res,next) =>{
    console.log("I am in validate Middle Ware");
    if(req.files==null ||  req.body==null){
        console.log("Error occured");
        return res.redirect('/posts/new');
    }
    next();
}