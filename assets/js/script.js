// local storage - onclick #search button - last search value for title and genre saved
$("#search").click(function () {
    event.preventDefault()
    var searchTitle = $(".searchTitle").val();
    var searchGenre = $(".searchGenre").val();
    localStorage.setItem("searchTitle", searchTitle);
    localStorage.setItem("searchGenre", searchGenre);
    runSearch(searchTitle, searchGenre);
});

// on load run last search
window.onload = function () {
    var searchTitle = localStorage.getItem("searchTitle");
    var searchGenre = localStorage.getItem("searchGenre");
    runSearch(searchTitle, searchGenre);
};


// appends result card, placeholder text assigned to result vars 
function runSearch(searchTitle, searchGenre) {

    var queryURL = "http://www.omdbapi.com/?&apikey=9bc820d8&t=" + searchTitle;

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function(response) {



        var art = "art";
        var title = `Title: ${searchTitle}`;
        var releaseDate = "Release Date: ";
        var author = "Author: ";
        var genre = "Genre: ";
        var plot = "Plot: ";


        art = `<img src="${response.Poster}">`;

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

<<<<<<< HEAD
=======
        console.log(response);
>>>>>>> bf385439aefd4e2478a397126135cf5a63c06a16


        var art = "art";
        var title = `Title: ${searchTitle}`;
        var releaseDate = "Release Date: ";
        var author = "Author: ";
        var genre = "Genre: ";
        var plot = "Plot: ";

<<<<<<< HEAD
        art = `<img src="${response.items[0].volumeInfo.imageLinks.thumbnail}">`;
=======

        art = `<img src="${response.Poster}">`;

        art = response.Poster;

>>>>>>> bf385439aefd4e2478a397126135cf5a63c06a16
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

        $("footer").append(`
            <div class="pure-u-1-5"><img src="${response.items[1].volumeInfo.imageLinks.thumbnail}"></div>
            <div class="pure-u-1-5"><img src="${response.items[2].volumeInfo.imageLinks.thumbnail}"></div>
            <div class="pure-u-1-5"><img src="${response.items[3].volumeInfo.imageLinks.thumbnail}"></div>
            <div class="pure-u-1-5"><img src="${response.items[4].volumeInfo.imageLinks.thumbnail}"></div>
            <div class="pure-u-1-5"><img src="${response.items[5].volumeInfo.imageLinks.thumbnail}"></div>
        `);

    })

}