$(function(){
   
        


 	function playVideo(e) {
 
			 var video = $(e.target).closest('.group').find('video')[0];
 
			 if (video.paused) {
				 video.play();
				 video.muted = false;
			 } else {
				 video.pause();
				 video.muted = true;
			 }
 
			 // Loads the clip again, so that it reverts back to the poster image
			 video.addEventListener("ended", function(){
				 video.load();
 
				 $("button").find("i").removeClass("fa-pause");
				 $("button").find("i").addClass("fa-play");
			 });
		 }
 
         function launchScreen(e){

            var launch = $(e.target).closest('.group').find('video')[0];

                if(launch.requestFullscreen) {
                    launch.requestFullscreen();
                } else if(launch.mozRequestFullScreen) {
                    launch.mozRequestFullScreen();
                } else if(launch.webkitRequestFullscreen) {
                    launch.webkitRequestFullscreen();
                } else if(launch.msRequestFullscreen) {
                    launch.msRequestFullscreen();
                }
              
         }


		 //$("video").click(playVideo);
         $("button").click(launchScreen);

         var figure = $(".group").hover( hoverVideo, hideVideo );

         function hoverVideo(e) {  
             $('video', this).get(0).play(); 
         }
         
         function hideVideo(e) {
             $('video', this).get(0).pause(); 
         }
         
	 });