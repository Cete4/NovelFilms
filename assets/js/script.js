// local storage - onclick #search element - last text entry saved to local storage item "searchTerm"
$("#search").click(function() {
    event.preventDefault()
    var searchTerm = $("input").val();
    localStorage.setItem("searchTerm", searchTerm);
});