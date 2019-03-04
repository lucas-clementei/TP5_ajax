<?php
require '../core/init.php';

if (isset($_POST['method']) === true && empty($_POST['method']) === false) {
    $chat   = new Chat();
    $method = trim($_POST['method']);

    if($method === 'recuperer') {
        $messages = $chat->fetchMessages();

        if(empty($messages) === true) {
            echo "Il n'y a aucun message dans le chat";
        } else  {
            foreach($messages as $message) {
            ?>
                    <a href="#" id="username<?php echo $message['id_utilisateur'];?>"><?php echo $message['nom']; ?></a> <p id="says">dit :</p>
                    <p id="content"><?php echo nl2br($message['message']); ?></p>
            
            <?php
            }
        }
    } else if ($method === 'poster' && isset($_POST['message']) === true) {
        $message = trim($_POST['message']);

        if (empty($message) === false) {
            $chat->throwMessage($_POST['user_id'], $message);
        }
    }
}
