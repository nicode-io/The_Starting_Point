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


    ?>
</body>
</html>