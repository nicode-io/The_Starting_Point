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
            if ($_GET['age'] < 12) {
                if ($gender == 'male') {
                    echo('Hello Mr kiddo!');
                } else if ($gender == 'female') {
                    echo('Hello Miss Kiddo!');
                } else {
                    echo('Hello Kiddo !');
                }
            } else if ($_GET['age'] >= 12 && $_GET['age'] < 18) {
                if ($gender == 'male') {
                    echo('Hello Mr Teenager !');
                } else if ($gender == 'female') {
                    echo('Hello Miss Teenager!');
                } else {
                    echo('Hello Teenager !');
                }
            } else if ($_GET['age'] >= 18 && $_GET['age'] < 115) {
                if ($gender == 'male') {
                    echo('Hello Mr Adult !');
                } else if ($gender == 'female') {
                    echo('Hello Miss Adult !');
                } else {
                    echo('Hello Adult !');
                }
            } else if ($_GET['age'] >= 115) {
                if ($gender == 'male') {
                    echo('Hello Mr Robot !');
                } else if ($gender == 'female') {
                    echo('Hello Miss Robot !');
                } else {
                    echo('Hello RObot !');
                }
            } else {
                echo('Please enter a number vallue');
            }
        }   
        ?>
        <form method="get" action="exercise-4.php">
            <label for="age">what's your age</label>
            <input type="text" name="age"><br>
            <input type="radio" name="gender" value="male">
            <label for="male">Male</label><br>
            <input type="radio" name="gender" value="female">
            <label for="female">Female</label><br>
            <input type="submit" name="submit" value="Greet me now">
        </form>
    </body>
</html>