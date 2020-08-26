<?php 
    require './assets/php/db.php';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Learning project PHP/SQL">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Bellota&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./assets/css/main.css" type="text/css">
        <title>Hackers Poulette</title>
    </head>
    <body> 
        <main class="main" role="main">
            <form id="formSupport" aria-label="Contact support team" action="./assets/php/submitted.php" method="post">
                <section class="formField" id="nameSect">
                    <article>
                        <label for="lastName">Last Name</label>
                    </article>
                    <article>
                        <input id="lastName" name="last-name" autocorrect="off" type="text" required>
                    </article>
                    <article>
                        <label for="firstName">First Name</label>
                    <article>
                        <input id="firstName" name="first-name" autocorrect="off" type="text" required>
                    </article>
                </section>    
                <section class="formField" id="genderSect">
                    <label for="gender">Gender:</label>
                    <select id="gender" name="gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Non-binary</option>
                    </select>
                </section>
                <section class="formField" id="emailSect">
                    <article>
                        <label for="email">Email</label>
                    </article>
                    <article>
                        <input id="email" name="email" autocomplete="email" autocapitalize="off" autocorrect="off" spellcheck="false" type="text" placeholder="you@mail.com" required>
                    </article>
                </section>
                <section class="formField" id="countrySect">
                    <label for="country">Country</label>
                    <input id="country" name="country" type="text" required>
                </section>
                <section class="formField" id="feedbackSect">
                    <article>
                        <label for="subject">Subject:</label>
                        <p>optionnal</p>
                        <select id="subject" name="subject" value="Others Issues">
                            <option value="technical-issue">Technical issue</option>
                            <option value="administrative-issue">Administrative issue</option>
                            <option value="commercial-issue">Commercial issue</option>
                            <option value="other-issue" selected="selected">Other issue</option>
                        </select>
                    </article>
                    <article>
                        <p>
                            <label for="comment">Comment</>
                        </p>
                        <p>
                            <textarea id="comment" name="comment" rows="20" cols="50" maxlength="1000" required></textarea>
                        </p> 
                    </article>
                </section>
                <section id="winnie">
                    <input id="pooh" name="pooh" type="text">
                </section>
                <section class="formField" id="submitSect">
                    <input value="Send feedback" type="submit"> 
                </section>
            </form>
        </main>
    </body>
</html>