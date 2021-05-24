<?php
//  include('./login must be split/server.php'); 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$title = "COGIP - Log out";
?>

<?php ob_start();?>
<html>
<h1>Vous êtes déconnecté.. A bientot !</h1>
</html>
<?php 
$content = ob_get_clean();
require('base.php');
?>