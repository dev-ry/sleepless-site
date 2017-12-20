
var artistArray = document.querySelectorAll('.name, .artist-pics');

// add event listener to h5 elements
for (var i = 0; i < artistArray.length; i++) {
  var artistEl = artistArray[i];
  artistEl.addEventListener('click', e => {
    e.preventDefault();
  // get sibling iframe
    var iframe = e.target.nextElementSibling;
  // remove class of none from that iframe
    iframe.classList.remove("none");
  // create a button within #artist div that pops up with soundCloud player
    var rmvBtn = document.createElement('button');
    rmvBtn.className = "rmvbtn";
    rmvBtn.innerHTML = "Close SoundCloud Player";
  // place above player to be visible
    artistEl.parentNode.insertBefore(rmvBtn, artistEl);
    console.log(artistEl);
  // add an event listener to rmvBtn
    rmvBtn.addEventListener('click', e => {
    e.preventDefault();
  // add back class of none from that iframe
    iframe.classList.add("none");
  // remove rmvBtn button
    rmvBtn.parentNode.removeChild(rmvBtn);
  // iframe.remove('iframe');
    });
  });
}





