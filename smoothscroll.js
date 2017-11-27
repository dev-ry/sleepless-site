        var scrollY = 0;
        var distance = 20;
        var speed = 1;
        var lastPos;

    function autoScrollTo(el){
        var scrollPos = window.pageYOffset;
        var targetPos = document.getElementById(el).offsetTop;


       if(scrollPos < targetPos){
              scrollDown(el);
       } else {
              scrollUp(el);
    }
}

    function scrollDown(el){
        var currentY = window.pageYOffset;
        var targetY = document.getElementById(el).offsetTop;
        var animator = setTimeout ('scrollDown(\''+el+'\')', speed);

         if (currentY < targetY && lastPos != currentY){

              scrollY = currentY+distance;
              window.scroll(0, scrollY);

        } else {

            clearTimeout(animator);

            }

    //       if(scrollPos > targetPos){
    //           scrollUp(el);
    //    } else {
    //           scrollDown(el);
    // }
}

    function scrollUp(el){
        var currentY = window.pageYOffset;
        var targetY = document.getElementById(el).offsetTop;
        var animator = setTimeout ('scrollUp(\''+el+'\')', speed);

         if (currentY > targetY && lastPos != currentY){

              scrollY = currentY-distance;
              window.scroll(0, scrollY);

        } else {

            clearTimeout(animator);

        }


          if(scrollPos > targetPos){
              scrollUp(el);
       } else {
              scrollDown(el);
    }
}

    function back(el){
        var currentY = window.pageYOffset;
        var targetY = document.getElementById(el).offsetTop;
        var animator = setTimeout ('back(\''+el+'\')', speed);

         if (currentY > targetY && lastPos != currentY){

              scrollY = currentY-distance;
              window.scroll(0, scrollY);

        } else {

            clearTimeout(animator);

        }

}

