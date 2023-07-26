function toggleVideo(cardId) {
    const iframe = document.getElementById(cardId);

    if (!iframe.src || iframe.src === "") {
      const videoId = cardId.substring(5);
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.style.display = "block";
      iframe.previousElementSibling.style.display = "none";
    } else {
      iframe.src = "";
      iframe.style.display = "none";
      iframe.previousElementSibling.style.display = "block";
    }
  }z