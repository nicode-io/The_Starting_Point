<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
            $pronouns = array ('I', 'You', 'He/She','We', 'You', 'They');
            for ($i=0; $i < count($pronouns); $i++) { 
                if ($pronouns[$i] == 'he' || $pronouns[$i] == 'she') {
                    echo($pronouns[$i] . " codes<br>" );
                } else {
                    echo($pronouns[$i] . " code<br>" );
                }
            }
            while ($a <= 120) {
                echo($a . "<br>");
                $a +=1;
            }
            for ($i=0; $i < 120; $i++) { 
                echo($i+1 . "<br>");
            }
            $collaborators = ['miguel', 'pascal', 'rita', 'sophia', 'greta', 'ben', 'max'];
            for ($i=0; $i < count($collaborators); $i++) { 
                echo($collaborators[$i] . "<br>");
            }
            $countries = array('SW'=>'sweden', 'BE'=>'belgium', 'IN'=>'india', 'CH'=>'china', 'AM'=>'america', 'BR'=>'brasil', 'IS'=>'island', 'PO'=>'portugal', 'MO'=>'morocco', 'RU'=>'russia');
            foreach ($countries as $key => $value) {
                echo("<input type='radio' name='country' option value='$key'>$value</input><br>");
            }
        ?>  
    </body>
</html>
