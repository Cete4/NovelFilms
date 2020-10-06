// local storage - onclick #search button - last search valur for title and genre saved
$("#search").click(function() {
    event.preventDefault()
    var searchTitle = $(".searchTitle").val();
    var searchGenre = $(".searchGenre").val();
    localStorage.setItem("searchTitle", searchTitle);
    localStorage.setItem("searchGenre", searchGenre);
});