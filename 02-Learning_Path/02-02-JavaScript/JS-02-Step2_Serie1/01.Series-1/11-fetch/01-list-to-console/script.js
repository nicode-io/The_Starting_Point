// 11-fetch/01-list-to-console/script.js - 11.1: liste vers console

// Thanks to Calvin Jitnaree https://github.com/Calvin781
(() => {
    document.getElementById("run").addEventListener("click", getHeroes());

    async function getHeroes() {
        const xMenPromise = await fetch("http://localhost:3000/heroes");
        const myHeroes = await xMenPromise.json();
        myHeroes.forEach(element => {
            console.log(element);
        });
    }
})();
