<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <?php
        $now = date('H:i'); 
        if ($now >= '05:00' && $now <= '09:00') {
            echo('Good Morning !');
        } else if ($now >= '09:01' && $now <= '12:00') {
            echo('Good day !');    
        } else if ($now >= '12:01' && $now <= '16:00') {
            echo('Good afternoon !');
        } else if ($now >= '16:01' && $now <= '21:00') {
            echo('Good evening !');
        } else if ($now >= '21:01' && $now <= '04:59') {
            echo('Good Night !');
        }
    ?> 
    </body>
</html>