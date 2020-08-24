<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Learning project PHP/SQL">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hackers Poulette</title>
</head>
<body>
<?php 
    $host = 'localhost';
    $port = '3306';
    $dbname = 'db1';
    $user = 'nicode';
    $pwd = 'khApzCu25gXegD2f9Y';
    try {
        $pdo = new PDO('mysql:host='.$host.';port='.$port.';dbname='.';charset=utf8', ''.$user.'', ''.$pwd.'');
        echo 'Connection succeeded';
    }
    catch (PDOException $e) {
        die('Erreur : '.$e->getMessage());
    }
?>
</body>
</html>