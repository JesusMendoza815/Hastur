$(document).ready(function() {

    var $videoSrc; 
    $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
    });
  
    $('#exampleModal').on('shown.bs.modal', function (e) {  
      $("#video").attr('src',$videoSrc);
    });

    $('#exampleModal').on('hide.bs.modal', function (e) {
        //Pereza poner stop a un video?
        $("#video").attr('src',$videoSrc); 
    });
});