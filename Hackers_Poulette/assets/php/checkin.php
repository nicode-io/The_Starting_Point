<?php 
    require '/var/www/nicode.io/public_html/becode/hackers-poulette/assets/php/db.php';

    function dbSendForm() {
        try {
            $conn = $pdo;

            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // SQL Query
            $sql = "INSERT INTO form_support (last_name, first_name, gender, email, country, subject, comment)
            VALUES ('$lastName', '$firstName', '$gender', '$email', '$country', '$subject', '$comment')";

            // use exec() because no results are returned
            $conn->exec($sql);
            echo 'Data from form to database OK';

        } catch(PDOException $e) {
            echo $sql . "<br>" . $e->getMessage(); 
        }
    }
        




