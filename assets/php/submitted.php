<?php 
    require 'db.php';

    $lastName = $_POST['last-name'];
    $firstName = $_POST['first-name'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $country = $_POST['country'];
    $subject = $_POST['subject'];
    $comment = $_POST['comment'];
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
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Feddback greetings">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you !</title>
    </head>
    <body>
        <main class="feedbackGreetings" role="main">
            <p>Dear <?php echo $lastName . ' ' . $firstName; ?></p>
            <p>First of all thanks for your feedback, we just sent the following to our team:</p>
            <p><?php echo $subject; ?></p>
            <p><?php echo $comment; ?></p>
            <p>A copy of this feedback was sent to the following email: <?php echo $email; ?></p>
            <p>Our team will send you an answer within 24 hours.</p>
        </main>      
    </body>
</html>

