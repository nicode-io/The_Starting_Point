<?php

// namespace Becode\Cogip\Model; don't forget / for PDO !

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Connection
{
    protected function dbConnect()
    {
        $db = new \PDO('mysql:host=localhost;dbname=cogip;charset=utf8', 'user_cogip', 'cogip_pwd'); 

        return $db;
    }
}