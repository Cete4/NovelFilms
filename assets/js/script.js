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

// appends result card, movie ajax
function runSearch(searchTitle) {
    $.ajax({
        url: "https://www.omdbapi.com/?&apikey=9bc820d8&t=" + searchTitle,
        method: "GET"
    }).then(function(response) {
        var art = `<img class="mainArt" alt="${response.Title}" src="${response.Poster}">`,
            title = `<i class="fa fa-film"></i> ${response.Title}`,
            releaseDate = `Released ${response.Released}`,
            author = `Writen by ${response.Writer}`,
            genre = `Genre: ${response.Genre}`,
            plot = `Plot: ${response.Plot}`;

        if (response.Response === "True") {
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
    })

    // appends results card, book ajax
    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + searchTitle,
        method: "GET"
    }).then(function(response) {
        var art = `<img class="mainArt" alt="${response.items[0].volumeInfo.title}" src="${response.items[0].volumeInfo.imageLinks.thumbnail}">`,
            title = `<i class="fa fa-book"></i> ${response.items[0].volumeInfo.title}`,
            releaseDate = `Released ${response.items[0].volumeInfo.publishedDate}`,
            author = `Writen by ${response.items[0].volumeInfo.authors[0]}`,
            genre = `Genre: ${response.items[0].volumeInfo.categories[0]}`,
            plot = `Plot: ${response.items[0].volumeInfo.description}`;
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

        // appends footer
        $("footer").empty();
        for (var i = 1; i < 6; i++) {
            $("footer").append(`
                <div class="pure-u-1-5"><img class="footerImage" alt="${response.items[i].volumeInfo.title}" src="${response.items[i].volumeInfo.imageLinks.thumbnail}"></div>
            `);
        }
    })
}