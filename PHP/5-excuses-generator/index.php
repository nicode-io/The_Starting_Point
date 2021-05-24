<!DOCTYPE html>
<html lang="en">
    <head>
    <meta name="description" content="excuses generator">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/css/style.css">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
        <title>Excuses Generator</title>
    </head>
    <body>
        <main>
            <p>Excuses Generator<p/>
            <p>Welcome to our excuses generator, please fill in the following form to get your custom excuses.</p>
            <section class="form">
                <form action="index.php" method="get">
                    <article>
                        <label for="childName">Name of your child</label>
                        <input type="text" name="childName">
                    </article>
                    <article>
                        <input type="radio" name="gender" value="boy">Boy</input>
                        <input type="radio" name="gender" value="girl">Girl</input>
                    </article>
                    <article>
                        <label for="teacherName">Name of the teacher</label>
                        <input type="text" name="teacherName">
                    </article>    
                    <article>
                        <p>
                            <label for="reason">Reason for absence</label>
                        </p>
                        <p>
                            <input type="radio" name="reason" value="0">Ilness</input>
                            <input type="radio" name="reason" value="1">Death in family</input>
                            <input type="radio" name="reason" value="2">Other activity</input>
                            <input type="radio" name="reason" value="3">Alien invasion</input>
                        </p>
                    </article>
                    <article>
                        <input type="submit" name="submit" value="Generate Excuses">
                    </article>
                </form>
            </section>
            <?php require './assets/php/generator.php';?>
        </main>
    </body>
</html>