<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <?php
        if (isset($_GET['age'])){
        // Form processing
            if ($_GET['age'] < 12) {
                echo('Hello kiddo!');
            } else if ($_GET['age'] >= 12 && $_GET['age'] < 18) {
                echo('Hello Teenager !');
            } else if ($_GET['age'] >= 18 && $_GET['age'] < 115) {
                echo('Hello Adult !');
            } else if ($_GET['age'] >= 115) {
                echo('Wow ! Still alive ? Are you a robot, like me ? Can I hug you ?');
            } else {
                echo('Please enter a number vallue');
            }
        }   
        ?>
        <form method="get" action="exercise-3.php">
            <label for="age">what's your age</label>
            <input type="text" name="age">
            <input type="submit" name="submit" value="Greet me now">
        </form>
    </body>
</html>