// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    document.getElementById('run').addEventListener('click', () => {
        const birds = [
            {name: "mouette", fem: true},
            {name: "corbeau"},
            {name: "mésange", fem: true},
            {name: "hibou"},
            {name: "buse", fem: true},
            {name: "pigeon"},
            {name: "pie", fem: true},
            {name: "vautour"},
            {name: "faucon"},
            {name: "rouge-gorge"},
            {name: "tourterelle", fem: true},
            {name: "corneille", fem: true},
        ];
        const adjectives = new Set([
            "cendré",
            "huppé",
            "chantant",
            "hurlant",
            "perché",
            "grand",
            "petit",
            "bleu",
            "pantelant",
            "tangent",
            "arboré",
        ]);
        let bird = birds[Math.floor(Math.random() * birds.length)];
        let adj = Array.from(adjectives);
        let randAdj = adj[Math.floor(Math.random() * adj.length)];
        if (bird.fem == true) {
            // if (randAdj = 'grand') {
            //     console.log('La ' + randAdj + 'e' + ' ' + bird.name );
            // } else {
            //     console.log('La ' + bird.name + ' ' + randAdj + 'e');
            // }   
            console.log('La ' + bird.name + ' ' + randAdj + 'e');
        } else {
        //     if (randAdj = 'grand') {
        //         console.log('Le ' + randAdj + ' ' + bird.name );
        //     } else {
        //         console.log('Le ' + bird.name + ' ' + randAdj);
        //     }   
        // }
            console.log('Le ' + bird.name + ' ' + randAdj);
        }
    });
})();
