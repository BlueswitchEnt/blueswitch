let searchIcon, searchBar, feat;
searchIcon = document.getElementById("search-icon");
searchBar = document.querySelector(".search-bar");
feat = document.querySelector(".featy");

// searchIcon.addEventListener("click", function() {
//   searchBar.style.display = (searchBar.style.display === "none") ? "block" : "none";
// });

searchIcon.addEventListener("click", function(){
  searchBar.classList.toggle("visible");
  featy.classList.toggle("visible");

});