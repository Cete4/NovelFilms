// local storage - onclick #search button - last search valur for title and genre saved
$("#search").click(function() {
    event.preventDefault()
    var searchTitle = $(".searchTitle").val();
    var searchGenre = $(".searchGenre").val();
    localStorage.setItem("searchTitle", searchTitle);
    localStorage.setItem("searchGenre", searchGenre);
    run();
});


// appends result card, placeholder text assigned to result vars 
function run(searchTitle) {
    var art = "art",
        title = "title",
        releaseDate = "release date",
        author = "author",
        genre = "genre",
        plot = "plot";

    $("#results").append(`
    <div id="resultCard" class="pure-g">
        <div id="art" class="pure-u-1-5">
            ${art}
        </div>
        <div id="info" class="pure-u-4-5">
        <ul>
            <li id="title">${title}</li>
            <li id="releaseDate">${releaseDate}</li>
            <li id="author">${author}</li>
            <li id="genre">${genre}</li>
            <li id="plot">${plot}</li>
        </ul>
        </div>
    </div>
    `);
}