// var embedRichardAlfaro = "<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/322915078&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>"
// var embedPbs73 = "<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/339535455&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>"
// var embedTainsus = "<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/357679449&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>"




var artistEl = document.querySelector('h5');
// add event listener to h5 elements
artistEl.addEventListener('click', e => {
  e.preventDefault();
  // get sibling iframe
  var iframe = e.target.nextElementSibling;
  // remove class of none from that iframe
  iframe.classList.remove("none");
  // create a button that pops up with soundCloud player
  var rmvBtn = document.createElement('button');
  rmvBtn.innerHTML = "Close SoundCloud Player";
  artistEl.parentNode.insertBefore(rmvBtn, artistEl);
});

// if soundcloud embed is displayed
// if {
//   iframe.classList.remove("none") === true {
// // create a button to close soundcloud embed (iframe)
//     var closeEmbedBtn = document.createElement("button");

//   }
// }


