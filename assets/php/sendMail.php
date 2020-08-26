<h2>Send information in progress</h2>

<?php
require 'pwdMail.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = false;//SMTP::DEBUG_SERVER;              // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'nicolas.denoel@gmail.com';              // SMTP username
    $mail->Password   = $pwdMail;                                  // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('nicolas.denoel@gmail.com', 'Nicolas');
    $mail->addAddress($data['email'], $data['firstName'] . ' ' . $data['lastName']);


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Your issue with Hacker Poulette';
    $mail->Body    = 'Thank you for transmitting your issue';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    header('Location: ./index.php?mail=success');
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}