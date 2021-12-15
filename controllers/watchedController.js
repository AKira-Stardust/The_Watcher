const Drama = require('../models/drama');
// watched_index, watched_add_get, watched_add_post, watched_get_one, watched_delete

//Test Data
const dramaList = [
    {
        title: "Hometown Cha Cha Cha",
        stars: 5,
        year: 2021,
        episodes: 16,
        status: 2
    },
    {
        title: "Startup",
        stars: 4,
        year: 2020,
        episodes: 12,
        status: 2
    },
    {
        title: "Two Cops",
        stars: 3.5,
        year: 2015,
        episodes: 21,
        status: 2
    }
];

//watched_index
const watched_index = (req, res) => {
    Drama.find()
        .then( (result) => {
            res.render("watched/index", {
                title: "All Watched Dramas",
                dramaList: result
            });
            // console.log(result);
        })
        .catch ( (err) => {
            console.log("Error in fetching data! " + err);
        })    
}; 

//watched_add_get
const watched_add_get = (req, res) => {
    res.render("watched/addNewDrama", {
        title: "Add New Watched Drama"
    });
};

//watched_add_post
const watched_add_post = (req, res) => {
    const drama = new Drama(req.body);
    drama.save()
        .then(result =>{
            res.redirect("/"); })
        .catch( err => {
            console.log("Oops! Error saving Drama.. " + err);
        });
};


//EXPORT
module.exports = {
    watched_index,
    watched_add_get,
    watched_add_post
};