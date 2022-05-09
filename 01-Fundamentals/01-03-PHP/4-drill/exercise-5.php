<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
        <?php
        if (isset($_GET['age']) && isset($_GET['gender']) && isset($_GET['english'])){
            $gender = $_GET['gender'];
            $english = $_GET['english'];
            if ($_GET['age'] < 12) {
                if ($english == 'yes') {
                    if ($gender == 'male') {
                        echo('Hello Mr kiddo!');
                    } else if ($gender == 'female') {
                        echo('Hello Miss Kiddo!');
                    } else {
                        echo('Hello Kiddo !');
                    }
                } else if ($english == 'no') {
                    if ($gender == 'male') {
                        echo('Aloha Mr kiddo!');
                    } else if ($gender == 'female') {
                        echo('Aloha Miss Kiddo!');
                    } else {
                        echo('Aloha Kiddo !');
                    }
                } else {
                    echo('Are you sure you can be here ?!');
                }
            } else if ($_GET['age'] >= 12 && $_GET['age'] < 18) {
                if ($english == 'yes') {
                    if ($gender == 'male') {
                        echo('Hello Mr Teenager !');
                    } else if ($gender == 'female') {
                        echo('Hello Miss Teenager!');
                    } else {
                        echo('Hello Teenager !');
                    }
                } else if ($english == 'no') {
                    if ($gender == 'male') {
                        echo('Aloha Mr Teenager !');
                    } else if ($gender == 'female') {
                        echo('Aloha Miss Teenager!');
                    } else {
                        echo('Aloha Teenager !');
                    }
                } else {
                    echo('Are you sure you can be here ?!');
                }
            } else if ($_GET['age'] >= 18 && $_GET['age'] < 115) {
                if ($english == 'yes') {
                    if ($gender == 'male') {
                        echo('Hello Mr Adult !');
                    } else if ($gender == 'female') {
                        echo('Hello Miss Adult !');
                    } else {
                        echo('Hello Adult !');
                    }
                } else if ($english == 'no') {
                    if ($gender == 'male') {
                        echo('Aloha Mr Adult !');
                    } else if ($gender == 'female') {
                        echo('Aloha Miss Adult !');
                    } else {
                        echo('Aloha Adult !');
                    }
                } else {
                    echo('Are you sure you can be here ?!');
                }
            } else if ($_GET['age'] >= 115) {
                if ($english == 'yes') {
                    if ($gender == 'male') {
                        echo('Hello Mr Robot !');
                    } else if ($gender == 'female') {
                        echo('Hello Miss Robot !');
                    } else {
                        echo('Hello RObot !');
                    }
                } else if ($english == 'no') {
                    if ($gender == 'male') {
                        echo('Aloha Mr Robot !');
                    } else if ($gender == 'female') {
                        echo('Aloha Miss Robot !');
                    } else {
                        echo('Aloha RObot !');
                    }
                } else {
                    echo('Are you sure you can be here ?!');
                }  
            } else {
                echo('Please enter a number value');
            }
        }   
        ?>
        <form method="get" action="exercise-5.php">
            <label for="age">what's your age</label>
            <input type="text" name="age"><br>
            <input type="radio" name="gender" value="male">
            <label for="male">Male</label><br>
            <input type="radio" name="gender" value="female">
            <label for="female">Female</label><br>
            <label for="english">Do you know English ?</label><br>
            <input type="radio" name="english" value="yes">
            <label for="english">Yes</label><br>
            <input type="radio" name="english" value="no">
            <label for="english">No</label><br>
            <input type="submit" name="submit" value="Greet me now">
        </form>
    </body>
</html>