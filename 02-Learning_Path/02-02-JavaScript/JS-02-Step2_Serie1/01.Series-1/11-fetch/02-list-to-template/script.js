// Thanks to Calvin Jitnaree https://github.com/Calvin781
(() => {
    document.getElementById("run").addEventListener("click", () => {
        getHeroes();
        async function getHeroes() {
            const xMenPromise = await fetch("http://localhost:3000/heroes");
            const myHeroes = await xMenPromise.json();
            addHeroes();
            function addHeroes() {
                for (let i = 0; i < myHeroes.length; i++) {
                    JSON.stringify(myHeroes[i]);
                    let temp1 = document.getElementById("tpl-hero").content;
                    let hero = document.importNode(temp1, true);
                    hero.querySelector(".name").textContent = myHeroes[i].name;
                    hero.querySelector(".alter-ego").textContent = myHeroes[i].alterEgo;
                    hero.querySelector(".powers").textContent = myHeroes[i].abilities;
                    document.getElementById("target").appendChild(hero);
                }
            }
        }
    })
})();
