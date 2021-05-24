// 10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)

(() => {
    document.getElementById('run').addEventListener('click', async () => {
        let result = await window.lib.getPosts(); 
        console.log(result);
    });
})();
