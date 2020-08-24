<?php 
    $host = 'localhost';
    $port = '3306';
    $dbname = 'db1';
    $user = 'nicode';
    $pwd = 'khApzCu25gXegD2f9Y';
    $dbcon = new PDO('mysql:host='.$host.';port='.$port.';dbname='.';charset=utf8', ''.$user.'', ''.$pwd.'');
    try {
        $dbcon;
        var_dump('Connection succeeded');
    }
    catch (PDOException $e) {
        die('Erreur : '.$e->getMessage());
    }