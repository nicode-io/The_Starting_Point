// 10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)


(() => {
    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPosts().then((posts) => {
            posts.forEach(post => {
                console.log(post);
            });  
        });     
    });
})();
