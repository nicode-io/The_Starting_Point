<?php
    if (isset($_GET['childName'], $_GET['teacherName'])) {
        $childName = $_GET['childName'];
        $gender = $_GET['gender'];
        $genderWording = ['he', 'she'];
        $teacherName =  $_GET['teacherName'];
        $reason = $_GET['reason'];
        $randomExcuse = [
        [
            'a strong foot intoxication doesn\'t allow our child for walking',
            'an elbow flu is currently being diagnosed',
            'our child has been diagnosed with a very painful tongue dilation',
            'a mental atrophy suddenly appeared in our child',
            'a severe increase in the acorn cell count appeared last night'
        ],[
            'our cat died while whirling around in the dryer', 
            'our dog starved to death last night',
            'our dear little snake choked on a mouse yesterday',
            'our parrot was decapitated by a fan',
            'our pet pig died at the slaughterhouse; we are commemorating his memory with a buffet where he will be present'
        ],[
            'our child participates in an international curling competition',
            'our child participates in a solar-powered hot air balloon flight',
            'our child is going to visit the famous antique ruins of his room',
            'our child is going to visit the uncle of his great cousin\'s grandmother\'s brother\'s uncle',
            'our child snorkeling without a wetsuit with sharks after her blood sample was taken',
        ],[
            'Roswell was real, they\'re near us, they\'re on their way... Pray for us',
            'the 5G waves have created a new intertemporal dimension. We are not alone!',
            'the satellites have turned against the men and are preparing their counterattack, the end is near... It\'s already too late for us',
            'we should never have trusted autonomous cars when they asked for the right to vote. This is all going to end badly',
            'Elon Musk was a reptilian who communicated with the afterlife. We always knew he was different, now it\'s up to us to pay the price'
        ]
        ];

        // Output the generated excuses
        echo("<br>" 
        . "<section id='generatedExcuses'>"
        .   "<article id='excuseTitle'>"
        .       "<p>Here's your random excuse :</p>"
        .   "</article>"
        .   "<article id='excuse'>"
        .       "<p>Dear professor " . $teacherName . ",</p>"
        .       "<p>Our " . $gender . " " . $childName . " won't assist to your next lesson.</p>"
        .       "<p>Indeed, " . $randomExcuse[$reason][rand(0,4)] . ".</p>"
        .       "<p>We thanks you for your comprehension and send you some news as soon as possible.</p>"
        .       "<p>Sincerely yours, " . $childName . "'s parents.</p>"
        .   "</article>"
        . "</section>"
        );
    }
?>