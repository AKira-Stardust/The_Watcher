const Drama = require('../models/drama');

//drama_details
//watched_index
const all_details = (req, res) => {
    Drama.find()
        .then( (result) => {
            res.render("all/all", {
                title: "All Dramas",
                dramaList: result
            });
            // console.log(result);
        })
        .catch ( (err) => {
            console.log("Error in fetching data! " + err);
        })    
}; 


//watched_add_get
const all_add_get = (req, res) => {
    res.render("all/addNewDrama", {
        title: "Add New Drama"
    });
};


//watched_add_post
const all_add_post = (req, res) => {
    const drama = new Drama(req.body);
    drama.save()
        .then(result =>{
            res.redirect("/"); })
        .catch( err => {
            console.log("Oops! Error saving Drama.. " + err);
        });
};



module.exports = { 
    all_details,
    all_add_get,
    all_add_post 
};