<?php 
try 
{
    // Connect to MySQL
    $db = new PDO('mysql:host=localhost;dbname=sql_php;charset=utf8', 'root', 'root');
    echo 'db con OK';
}
catch(Exception $e)
{
    // Print error message and stop execution
    die('Error : '.$e->getMesssage());
}

// Import data
$result = $db->query('SELECT * FROM weather');

// Display data
while ($data = $result->fetch())
{
    echo ($data['ville'] . ' ');
    echo ($data['haut'] . ' ');
    echo ($data['bas'] . ' ');
}

// Close query
$result->closeCursor();

// --------------------------------------------------
