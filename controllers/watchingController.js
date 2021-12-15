// watching_index, watching_add_get, watching_post, watching_get_one, watching_delete

//Test Data
const dramaList = [
    {
        title: "Test1",
        stars: 5,
        year: 2020
    },
    {
        title: "Test2",
        stars: 4,
        year: 2002
    },
    {
        title: "Test3",
        stars: 5,
        year: 2010
    }
];

//watching_index
const watching_index = (req, res) => {    
    res.render("watching/index", {
        title: "Currently Watching Dramas",
        dramaList
    });
}; 


//EXPORT
module.exports = {
    watching_index
};