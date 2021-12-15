// toWatch_index, toWatch_add_get, toWatch_post, toWatch_get_one, toWatch_delete

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

//toWatch_index
const toWatch_index = (req, res) => {    
    res.render("toWatch/index", {
        title: "Dramas To Watch",
        dramaList
    });
}; 


//EXPORT
module.exports = {
    toWatch_index
};