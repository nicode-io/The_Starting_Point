<?php 
    // require './assets/php/db.php';
    // include_once './assets/php/sendMail.php';
    // require './assets/php/checkin.php';

    $firstName = '';
    $lastName = '';
    $gender = '';
    $country = '';
    $email = '';
    $subject = '';
    $comment = '';

    if (!empty($_POST)) {
        $firstName = filter_var($_POST['first-name'], FILTER_SANITIZE_STRING);
        $lastName = filter_var($_POST['last-name'], FILTER_SANITIZE_STRING);
        $gender = filter_var($_POST['gender'], FILTER_SANITIZE_STRING);
        $country = filter_var($_POST['country'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
        $comment = filter_var($_POST['comment'], FILTER_SANITIZE_STRING);
        $checkErrors = array('firstName'=>'', 'lastName'=>'', 'gender'=>'', 'country'=>'', 'email'=>'');

        if(!preg_match('/^[a-zA-Z\s]+$/', $firstName)) {
            $errors['firstName'] = '<i class="fas fa-exclamation-circle"></i> Your first name contains invalid characters';
        }
        if(!preg_match('/^[a-zA-Z\s]+$/', $lastName)) {
            $errors['lastName'] = '<i class="fas fa-exclamation-circle"></i> Your last name contains invalid characters';
        }
        if(!preg_match('/^[a-zA-Z\s]+$/', $gender)) {
            $errors['gender'] = '<i class="fas fa-exclamation-circle"></i> Please select a gender from the list';
        }
        if(!preg_match('/^[a-zA-Z\s]+$/', $country)) {
            $errors['country'] = '<i class="fas fa-exclamation-circle"></i> Your country is invalid';
        }
        if (!preg_match('/^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/', $email)) {
            $errors['email'] = '<i class="fas fa-exclamation-circle"></i> Your email is invalid';
        } 
    }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Learning project PHP/SQL">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/css/main.min.css" type="text/css">
        <script src="https://kit.fontawesome.com/16f591d449.js" crossorigin="anonymous"></script>
        <title>Hackers Poulette</title>
    </head>
    <body> 
        <main class="main d-flex flex-column justify-content-center align-items-center" role="main">
            <section id="logo" class="col-8">
                <img src="./assets/img/hackers-poulette-logo.png" class="rounded mx-auto d-block" alt="Hacker Poulette logo">
            </section>    
            <form id="formSupport" class="jumbotron col-11 col-xl-8" aria-label="Contact support team" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post"> <!-- action target this page -->
                <section class="row pb-1" id="nameSect">
                    <article class="col-12 col-xl-6 pb-2">
                        <label for="firstName">First name</label>
                        <input type="text" class="form-control" name="last-name" placeholder="First name" autocorrect="off" value="<?php echo $firstName; ?>"required aria-required="true">
                        <?php echo '<span class="error" role="alert">' . $errors['firstName'] . '</span>' ?>
                    </article>
                    <article class="col-12 col-xl-6 pb-2">
                        <label for="lastName">Last name</label>
                        <input type="text" class="form-control" name="last-name" placeholder="Last name" autocorrect="off" value="<?php echo $lastName; ?>"required aria-required="true">
                        <?php echo '<span class="error" role="alert">' . $errors['lastName'] . '</span>' ?>
                    </article>
                </section> 
                <section class="row pb-1 d-flex flex-row justify-content-between align-items-center">
                    <article class="col-xl-3 pb-2">
                        <label for="gender">Gender</label>
                        <select id="gender" name="gender" class="form-control" required aria-required="true">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other" selected="selected">Non-binary</option>
                        </select>
                        <?php echo '<span class="error" role="alert">' . $errors['gender'] . '</span>' ?>
                    </article>
                    <article class="col-xl-6 pb-2">
                        <label for="country">Country</label>
                        <input id="country" class="form-control" name="country" type="text" placeholder="Country" value="<?php echo $country; ?>" required aria-required="true">
                        <?php echo '<span class="error" role="alert">' . $errors['country'] . '</span>' ?>
                    </article>
                </section>
                <section class="row pb-1">
                    <article class="col-xl-6 pb-2">
                        <label for="email">Email</label>
                        <input id="email" class="form-control" name="email" autocomplete="email" autocapitalize="off" autocorrect="off" spellcheck="false" type="text" placeholder="Email" value="<?php echo $email; ?>" required aria-required="true">
                        <?php echo '<span class="error" role="alert">' . $errors['email'] . '</span>' ?>
                    </article>
                </section>
                <section class="row pb-1">
                    <article class="form-group col-xl-6">
                        <label for="subject">Issue <i id="optional">optional</i></label>
                        <select id="subject" class="form-control" name="subject" value="Others Issues" aria-required="false">
                            <option value="technical-issue">Technical issue</option>
                            <option value="administrative-issue">Administrative issue</option>
                            <option value="commercial-issue">Commercial issue</option>
                            <option value="other-issue" selected="selected">Other issue</option>
                        </select>
                    </article>
                </section>
                <section>
                    <article class="form-group col-xl-12 p-2 pb-2">
                        <label for="comment">Comment</>
                        <textarea id="comment" class="form-control" name="comment" rows="10" cols="100" maxlength="1000" required aria-required="true"><?php echo $comment; ?></textarea>
                    </article>
                </section>
                <section id="winnie">
                    <label for="pooh"></label>
                    <input id="pooh" name="pooh" type="text">
                </section>
                <section class="formField col-12 col-xl-12 pt-3 d-flex justify-content-end align-items-center" id="submitSect">
                    <input type="submit" id="submit" class="btn btn-primary" name="submit" value="Send Feedback" aria-describedby="descriptionSubmit"></input> 
                </section>
                <span id="descriptionSubmit">Submit will send your feedback to our team, thanks for sharing</span>
            </form>
        </main>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    </body>
</html>