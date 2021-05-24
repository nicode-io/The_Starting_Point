<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $hello = [
            0 => 'Hey Mister',
            1 => 'Hey Miss'
        ];
        $gender = 'female';
        echo ($gender == 'female') ? $hello[1] : $hello[0];
    ?>
</body>
</html>