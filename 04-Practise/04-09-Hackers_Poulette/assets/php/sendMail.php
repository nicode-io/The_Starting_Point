<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require '/var/www/nicode.io/public_html/becode/hackers-poulette/libs/phpmailer/src/PHPMailer.php';
    require '/var/www/nicode.io/public_html/becode/hackers-poulette/libs/phpmailer/src/SMTP.php';
    require '/var/www/nicode.io/public_html/becode/hackers-poulette/libs/phpmailer/src/Exception.php';

    // Personnal imports
    

    function sendMail($firstName, $lastName, $email, $subject, $body) {
        $mail = new PHPMailer(true);
        include '/var/www/nicode.io/public_html/becode/hackers-poulette/assets/php/pwdMail.php';
        try {
            //Server settings
            $mail->SMTPDebug = 0;                      // Enable verbose debug output
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;
            $mail->Username   = 'nicolas.denoel@gmail.com';                     
            $mail->Password   = $pwdMail;                              
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         
            $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

            //Recipients
            $mail->setFrom('nicoas.denoel@gmail.com', 'Admin');
            $mail->addAddress($email, $firstName . '' . $lastName);     // Add a recipient
            //$mail->addAddress('ellen@example.com');               // Name is optional
            //$mail->addReplyTo('info@example.com', 'Information');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');

            // Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Team Poulette - Your ' . $subject;
            $mail->Body    = "
                Hello {$firstName}  {$lastName},</br>
                </br>
                </br>
                Thanks your sending us your {$subject} !</br>
                </br>
                The Poulette's team will answer you <b>within 24 hours</b>. </br>
                </br>
                Your message was the following: {$body}</br>
                </br>
                See you soon, </br>
                </br>
                </br>
                <b>Hackers Poulette Team</b></br>
                ";
            $mail->AltBody = 'Hello, Thanks for your feedback. We\ll answer you within 24hours. Hackers Poulettes Team';

            $mail->send();
            // echo ' Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }