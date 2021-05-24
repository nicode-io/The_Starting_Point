<?php 
    require_once 'db.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PDO exercise</title>
    </head>
    <body>
        <?php
            $result = $pdo->sqlQuery('SELECT * FROM weather');
            echo $result;
            foreach ($result as $row) {
                echo $row;
            }
        ?>
    </body>
</html>