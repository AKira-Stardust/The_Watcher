const Drama = require('../models/drama');

//drama_details
const drama_details = (req, res) => {
    const id = req.params.id;
    Drama.findById(id)
    .then( (result) => {
        res.render('details',{
            drama: result,
            title: "Drama Details"
        });
    })
    .catch( (err) =>{
        console.log("Oops, error locating that Drama! " + err);
    });
};

module.exports = { drama_details };