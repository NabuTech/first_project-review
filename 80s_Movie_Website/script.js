User


function playVideo(videoId) {
  const movieElement = document.getElementById(videoId);

  const videoUrl = getVideoUrlForMovie(videoId);

  const iframeElement = document.createElement('iframe');
  iframeElement.src = videoUrl;
  iframeElement.width = "100%";
  iframeElement.height = "100%";
  iframeElement.title = "YouTube video player";
  iframeElement.frameborder = "0";
  iframeElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframeElement.allowfullscreen = true;

  movieElement.classList.add('video-playing'); // Add a class to indicate video is playing
  movieElement.innerHTML = '';
  movieElement.appendChild(iframeElement);
}

function getVideoUrlForMovie(videoId) {
  // Mapping of video IDs to their corresponding YouTube URLs
  const videoIdToUrlMap = {
    "EmpireStrikesBack": "https://www.youtube.com/embed/JNwNXF9Y6kY?autoplay=1",
    "Raiders": "https://www.youtube.com/embed/0xQSIdSRlAk?autoplay=1",
    "ET": "https://www.youtube.com/embed/qYAETtIIClk?autoplay=1",
    "ReturnoftheJedi":"https://www.youtube.com/embed/7L8p7_SLzvU?autoplay=1",
    "BeverlyHillsCop":"https://www.youtube.com/embed/oc3sPICXZLs?autoplay=1",
    "BackToTheFuture":"https://www.youtube.com/embed/qvsgGtivCgs?autoplay=1",
    "TopGun":"https://www.youtube.com/embed/xa_z57UatDY?autoplay=1",
    "ThreeMenandaBaby":"https://www.youtube.com/embed/ohBNZZKmtnw?autoplay=1",
    "RainMan":"https://www.youtube.com/embed/mlNwXuHUA8I?autoplay=1",
    "IndianaJonesLastCrusade":"https://www.youtube.com/embed/DKg36LBVgfg?autoplay=1" ,
    
  };
}

// Function to update the movie list based on filters
function updateMovieList() {
  const yearFilter = document.getElementById("yearFilter").value;
  const genreFilter = document.getElementById("genreFilter").value;

  // Get all the movie elements
  const movieElements = document.querySelectorAll(".movie");

  // Loop through each movie element and check if it matches the selected filters
  movieElements.forEach(movieElement => {
    const year = movieElement.getAttribute("data-year");
    const genre = movieElement.getAttribute("data-genre");

    // Check if the movie matches the selected filters or if filters are set to "All"
    const isYearMatch = yearFilter === "" || year === yearFilter;
    const isGenreMatch = genreFilter === "" || genre.includes(genreFilter);

    // Hide or show the movie element based on the filter matches
    if (isYearMatch && isGenreMatch) {
      movieElement.style.display = "block";
    } else {
      movieElement.style.display = "none";
    }
  });
}

// Call the updateMovieList function initially to show all movies
updateMovieList();
