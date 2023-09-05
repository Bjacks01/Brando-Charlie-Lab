$( document ).ready(function() {
    console.log( "ready!" );
  
  let msg = ''
  
  $('#willsmithpic').click( 
    function(){
      console.log("position: ", $('#willsmithpic').position() );
    }
  ); 
  
 
  $( "#willsmithpic" ).draggable({
      stop: function() {
        if(  $('#willsmithpic').position().left > 500){
          msg = 'Keep my wifes name out your mouth!'
          $('#gamestatus').text(msg);
                }
        else if( $('#willsmithpic').position().left > 300 && $('#willsmithpic').position().left < 500){
          msg = 'Closer...'
          $('#gamestatus').text(msg);
                  }    

    }
    
     });
  
  
  
  
  
}); 