<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <?php
            if (isset($_GET['age']) && isset($_GET['gender'])){
                $gender = $_GET['gender'];
                $age = $_GET['age'];
                if ($age >= 21 && $age <= 40 && $gender == 'female') {
                    echo('Welcome to the team');
                } else {
                echo('Sorry, you don\'t meet the criteria');
                }
            }   
        ?>
        <form method="get" action="exercise-6.php">
            <label for="age">what's your age</label>
            <input type="text" name="age"><br>
            <input type="radio" name="gender" value="male">
            <label for="male">Male</label><br>
            <input type="radio" name="gender" value="female">
            <label for="female">Female</label><br>
            <input type="submit" name="submit" value="Join the team">
        </form>
    </body>
</html>