// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPosts().then((posts) => {
            posts.forEach(post => {
                window.lib.getComments().then((result) => {
                    post.comment = result;
                });
            }); 
            console.log(posts);
        });
    });
})();
