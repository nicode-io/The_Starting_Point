<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    // 1
    function titleize($word) {
        echo ucwords($word);
        echo('<br>');
    }
    titleize(robot);

    // 2
    function actualYear() {
        echo (date('Y'));
        echo('<br>');
    }
    actualYear();
    
    // 3
    function actualDate() {
        echo ('Today is the ' . date('d') . '/' . date('m') . '/' . date('y') . '. It\'s ' . date('H:i') . ' and ' . date('s') . ' seconds.');
        echo('<br>');
    }
    actualDate();

    // 4
    function sum($numberOne, $numberTwo) {
        echo($numberOne + $numberTwo);
        echo('<br>');
    }
    sum(24, 18);

    // 5
    function sumCheckArg($numberOne, $numberTwo) {
        if (is_int($numberOne) && is_int($numberTwo)) {
            echo($numberOne + $numberTwo);
            echo('<br>');
        } else {
            echo('Error: NaN');
            echo('<br>');
        }
    }
    sumCheckArg('a', 15);
    sumCheckArg(24, 18);
    
    // 6
    function makeAcronym($string) {
        $strArray = explode(" ", $string);
        foreach ($strArray as $word) {
            echo(ucwords($word[0]));
        }
        echo('<br>');
    }
    makeAcronym('hello world how are you today');
    makeAcronym('in code we trust');

    // 7
    function replaceOne($word) {
        $search = 'ae';
        $replace = 'æ';
        $result = str_replace($search , $replace , $word);
        echo($result);
        echo('<br>');
    }
    replaceOne('microsphaera');

    // 8
    function replaceTwo($word) {
        $search = 'æ';
        $replace = 'ae';
        $result = str_replace($search , $replace , $word);
        echo($result);
        echo('<br>');
    }
    replaceTwo('sphærotheca');
    
    // 9
    function createDivError($cssClass, $errorMessage) {
        echo('<div class="' . $cssClass . '">Error: ' . $errorMessage . '.</div>');
        echo('<br>');
    }
    createDivError('warning', 'Be aware of the dogs');

    // 10
    function createDivErrorTwo($errorMessage, $cssClass = 'info') {
        echo('<div class="' . $cssClass . '">Error: ' . $errorMessage . '.</div>');
        echo('<br>');
    }
    createDivErrorTwo('Be aware of the dogs');
    createDivErrorTwo('Be aware of the dogs', 'newClass');

    // 11
    /**
     * Choose two randoms words in two arrays and display them 
     * User can click 'generate' button to rand two new words
     */
    function randomWord() {
        $wordsArrShort = ['Black', 'white', 'green', 'blue'];
        $wordsArrLong = ['alliance', 'accident', 'building', 'calendar'];
        $wordOne = ucwords($wordsArrShort[rand ( 0 , count($wordsArrShort)-1 )]);
        $wordTwo = ucwords($wordsArrLong[rand ( 0 , count($wordsArrLong)-1 )]);

        echo('<form method="get" action="exercises.php">' 
        .   '<input type="submit" name="submit" value="generate"/>'  
        .   '</form>'
        .   '<p>' . $wordOne . ' ' . $wordTwo . '</p>');
    }
    randomWord();

    // 12
    function lowerize($word) {
        echo(strtolower($word));
        echo('<br>');
    }
    lowerize('BIG UPPERCASE WORDS');

    function calculateConeVolume($ray, $height) {
        $coneVolume = $ray * $ray * 3.14 * $height * (1/3);
        echo('The volume of a cone which ray is ' . $ray . ' and height is ' . $height . ' = ' . $coneVolume . ' cm<sup>3</sup><br />');
    }
    calculateConeVolume(14, 50);

    ?>
</body>
</html>