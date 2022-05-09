<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php 
            $possible_states = ['dirty', 'unhabitable', 'burning', 'clean'];
            $room_is_filthy = $possible_states[2];

            if ($room_is_filthy == $possible_states[0]) {
                echo "Yuk, Room is dirty : let's clean it up !";
                cleanup_room();
                echo "<br>Room is now clean!";
                $room_is_filthy = $possible_states[3];
            } else if ($room_is_filthy == $possible_states[1]) {
                echo "Yuk, Room is unhabitable, what a shame !";
                cleanup_room();
                echo "<br>Room is now clean!";
                $room_is_filthy = $possible_states[3];
            } else if ($room_is_filthy == $possible_states[2]) {
                echo "Yuk, Room is burning, call the firefigthers !";
                cleanup_room();
                echo "<br>Room is now clean!";
                $room_is_filthy = $possible_states[3];
            } else {
                echo "<br>Nothing to do, room is neat.";
            }
        ?>
    </body>
</html>