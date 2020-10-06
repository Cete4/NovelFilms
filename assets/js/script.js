// local storage - onclick #search element - last text entry saved to local storage item "searchTerm"
$("#search").click(function() {
    event.preventDefault()
    var searchTerm = $("input").val().toLowerCase();
    console.log(searchTerm);
    var spaceReplace = searchTerm.split(' ').join('+');
    console.log(spaceReplace);
    localStorage.setItem("searchTerm", searchTerm);
    localStorage.setItem("spaceReplace", spaceReplace);
});