var richardAlfaro = '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https:\'//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/322915078&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>';
var pbs73 = '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https:\'//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/339535455&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>';
var tainsus = '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https:\'//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/357679449&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>';

artistsArray = document.querySelectorAll('.name, .artist-pics');

// var artistsThree = [richardAlfaro, pbs73, tainsus];
  for (var i = 0; i < artistsArray.length; i++) {
    var artistEl = artistsArray[i];
    //add event listener to name button
    switch () {
      artistEl.addEventListener('click', e => {
        e.preventDefault();
    });
  }
};

