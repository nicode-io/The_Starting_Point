<?php 
    $host = 'localhost';
    $port = '3306';
    $dbname = 'db01';
    $user = 'becode';
    $pwd = 'becode';
    try {
        $pdo = new PDO('mysql:host=' . $host . ';port=' . $port . ';dbname=' . $dbname . ';charset=utf8', '' . $user . '', '' . $pwd . '');
    }
    catch (PDOException $e) {
        die('Erreur : '.$e->getMessage());
    } 