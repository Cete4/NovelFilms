// local storage - onclick #search button - last search value for title and genre saved
$("#search").click(function() {
    event.preventDefault()
    var searchTitle = $(".searchTitle").val();
    localStorage.setItem("searchTitle", searchTitle);
    runSearch(searchTitle);
});

// on load run last search
window.onload = function() {
    var searchTitle = localStorage.getItem("searchTitle");
    runSearch(searchTitle);
};


// on click footer images
$(document).on("click", ".footerImage", function() {
    var searchTitle = $(this).attr("alt");
    runSearch(searchTitle);
});

// on click main images
$(document).on("click", ".mainArt", function() {
    query = $(this).attr("alt");
    window.open("http://google.com/search?q=" + query);
});


<<<<<<< HEAD





=======
>>>>>>> 5abeac333d100eeac389719088d60ef532d77b42
// appends result card, placeholder text assigned to result vars 
function runSearch(searchTitle) {

    var queryURL = "https://www.omdbapi.com/?&apikey=9bc820d8&t=" + searchTitle;

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response) {



        var art = "art";
        var title = `<i class="fa fa-film"></i> ${response.Title}`;
        var releaseDate = "Release Date: ";
        var author = "Author: ";
        var genre = "Genre: ";
        var plot = "Plot: ";


        art = `<img class="mainArt" alt="${response.Title}" src="${response.Poster}">`;

        releaseDate += response.Released;
        author += response.Writer;
        genre += response.Genre;
        plot += response.Plot;


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
    })



    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + searchTitle;

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response) {



        var art = "art";
        var title = `<i class="fa fa-book"></i> ${response.items[0].volumeInfo.title}`;
        var releaseDate = "Release Date: ";
        var author = "Author: ";
        var genre = "Genre: ";
        var plot = "Plot: ";

        art = `<img class="mainArt" alt="${response.items[0].volumeInfo.title}" src="${response.items[0].volumeInfo.imageLinks.thumbnail}">`;
        releaseDate += response.items[0].volumeInfo.publishedDate;
        author += response.items[0].volumeInfo.authors[0];
        genre += response.items[0].volumeInfo.categories[0];
        plot += response.items[0].volumeInfo.description;

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

        $("footer").empty();
        for (var i = 1; i < 6; i++) {
            $("footer").append(`
                <div class="pure-u-1-5"><img class="footerImage" alt="${response.items[i].volumeInfo.title}" src="${response.items[i].volumeInfo.imageLinks.thumbnail}"></div>
            `);
        }
    })
}