// 11-fetch/04-add/script.js - 11.4: ajouter un élément

// Thanks to Calvin Jitnaree https://github.com/Calvin781
(() => {
    let liste = [];
    document.getElementById("run").addEventListener("click", () => {
        let heroInput = parseInt(document.getElementById("hero-id").value);
        getHero();
        async function getHero() {
            const heroesPromise = await fetch(`http://localhost:3000/heroes/${heroInput}`);
            const myHero = await heroesPromise.json();
            listHeroes();
            async function listHeroes() {
                try {
                    if (!liste.includes(heroInput)) {

                        liste.push(heroInput);

                        let temp1 = document.getElementById("tpl-hero").content;
                        let hero = document.importNode(temp1, true);
                        hero.querySelector(".name").textContent = myHero.name;
                        hero.querySelector(".alter-ego").textContent = myHero.alterEgo;
                        hero.querySelector(".powers").textContent = myHero.abilities;
                        document.getElementById("target").appendChild(hero);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    })
})();
