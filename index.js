// Function Syntax
function addOne(x) {
    return x + 1
}

// console.log(addOne(4))

// Working with groups of objects
const albums = ['Real Thing', 'Angel Dust', 'Album of the Year']
// forEach
albums.forEach(function (album) {
    console.log(album)
});
// array method map()
albums.map(function (album) {
    console.log(album)
})