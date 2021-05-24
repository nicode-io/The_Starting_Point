<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <?php
        if (isset($_GET['note'])){
        $note = $_GET['note'];
        // Form processing
            switch (true) {
                case $note >= 19:
                    echo('Too good to be true : confront the cheater !');
                    break;
                case $note >= 15:
                    echo('Bravo,bravissimo !');
                    break;
                case $note >= 11:
                    echo('Not bad !');
                    break;
                case $note >= 10:
                    echo('Barely enough');
                    break;
                case $note >= 5:
                    echo('Hello Teennoter !');
                    break;
                case $note >= 0:    
                    echo('This work is really bad. What a dumb kid!');
                    break;
                default:
                    echo('Are you sure you can be here ?!');    
                    break;    
            }
        }   
        ?>
        <form method="get" action="exercise-9.php">
            <label for="note">what's your note</label>
            <input type="text" name="note">
            <input type="submit" name="submit" value="Send message to student">
        </form>
    </body>
</html>
