// local storage - onclick #search button - last search value for title and genre saved
$("#search").click(function() {
    event.preventDefault()
    var searchTitle = $(".searchTitle").val();
    var searchGenre = $(".searchGenre").val();
    localStorage.setItem("searchTitle", searchTitle);
    localStorage.setItem("searchGenre", searchGenre);
    runSearch(searchTitle, searchGenre);
});

// on load run last search
window.onload = function() {
    var searchTitle = localStorage.getItem("searchTitle");
    var searchGenre = localStorage.getItem("searchGenre");
    runSearch(searchTitle, searchGenre);
};


// appends result card, placeholder text assigned to result vars 
function runSearch(searchTitle, searchGenre) {
    var art = "art",
        title = `Title ${searchTitle}`,
        releaseDate = "release date",
        author = "author",
        genre = `Genre ${searchGenre}`,
        plot = "plot";

    $("#results").prepend(`
        <div id="resultCard" class="pure-g">
            <div id="art" class="pure-u-1-5">${art}</div>
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