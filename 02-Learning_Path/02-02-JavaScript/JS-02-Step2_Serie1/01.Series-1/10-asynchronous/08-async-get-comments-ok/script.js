// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
(() => {
    document.getElementById('run').addEventListener('click', async () => {
        let posts = await window.lib.getPosts();
            posts.forEach(async post => { 
                post.comment = await window.lib.getComments()
                console.log(post);
        });
    });
})();

