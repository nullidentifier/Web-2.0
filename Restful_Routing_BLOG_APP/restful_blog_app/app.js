var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//Schema & MODEL  config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

var Blog = mongoose.model("Blog", blogSchema);


/*Blog.create({
    title: "first blog",
    image: "https://images.unsplash.com/photo-1496361328949-40f91ca2fcef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01faa5d3f58a7b5999a664d2303a4815&auto=format&fit=crop&w=500&q=60",
    body: "Hello"

});*/
//RESTFUL ROUTES
app.get("/", function(req, res) {
    res.redirect("/blogs");
});
//INDEX ROUTE
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", { blogs: blogs });
        }
    });

});

//NEW ROUTE
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req, res) {
    //create blog, the data is in object blog
    Blog.create(req.body.blog, function(err, newBlog) {

        if (err) {
            res.render("new");
        }
        else { //then redirect to index
            console.log("req:" + req.body.blog.title);
            res.redirect("/blogs");
        }

    });

});


//SHOW ROUTE
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("show", { blog: foundBlog });

        }
    });
    //    res.send("show Page");
});

//EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("edit", { blog: foundBlog });
        }
    });
});

//UPDATE ROUTE
app.put("/blogs/:id", function(req, res) {
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.redirect("/blogs/" + req.params._id);
        }
    })
});

//DESTROY ROUTE
app.delete("/blogs/:id", function(req, res) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.redirect("/blogs");
        }
    });
    //   res.send("DELEEEETE");
});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Servr is running!!");
});
