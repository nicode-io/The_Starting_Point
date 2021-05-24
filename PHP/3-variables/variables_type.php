<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $first_name = 'denoel';
    $age = 36;
    $eyes = 'grown';
    $family = array(
        0 => 'Michèle', 
        1 => 'Caroline',
        2 => 'Dylan',
        3 => 'Ophèlie',
        4 => 'Dominique',
        5 => 'Sophie',
        6 => 'Karoll',
    );
    $hungry = true;
?>
<p>
    <?php echo($first_name); ?>
</p>
<p>
    <?php echo($age); ?>
</p>
<p>
    <?php echo($eyes); ?>
</p>
<p>
    <?php echo($family[0]); ?>
</p>
    
</body>
</html>
