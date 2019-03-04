
var chat = {};

chat.saisie = null;

chat.posterMessage = function(user_id){
    chat.saisie = $(".message_input").val();
    console.log(chat.saisie);
    $.ajax({

        url : 'ajax/chat.php',
 
        type : 'POST', 
 
        data : "method=poster&message="+chat.saisie+"&user_id="+user_id, 
 
        dataType : 'html',
        success : function(data, statut){
            chat.recupererMessages();
        },
        error : function(resultat, statut, erreur){
        },
     });
    $(".message_input").val('');
}
chat.recupererMessages = function(){
 
        $.ajax({
    
           url : 'ajax/chat.php',
    
           type : 'POST',

           data: 'method=recuperer',
    
           dataType : 'html',
    
           success : function(data, statut){
                $('.messages').empty();
                $('.messages').append(data);
    
           },
           error : function(resultat, statut, erreur){
           },
           complete : function(resultat, statut){
           }
        });
}

setInterval(chat.recupererMessages, 1500);