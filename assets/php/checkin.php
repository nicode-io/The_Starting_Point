<?php 
    include_once './sendMail.php';
    
        
        $lastName = filter_var($_POST['last-name'], FILTER_SANITIZE_STRING);
        $firstName = filter_var($_POST['first-name'], FILTER_SANITIZE_STRING);
        $gender = filter_var($_POST['gender'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $country = filter_var($_POST['country'], FILTER_SANITIZE_STRING);
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $comment = filter_var($_POST['comment'], FILTER_SANITIZE_STRING);




    



    try {
        $conn = $pdo;
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "INSERT INTO form_support (last_name, first_name, gender, email, country, subject, comment)
        VALUES ('$lastName', '$firstName', '$gender', '$email', '$country', '$subject', '$comment')";
        // use exec() because no results are returned
        $conn->exec($sql);
    } catch(PDOException $e) {
        echo $sql . "<br>" . $e->getMessage(); 
    }


