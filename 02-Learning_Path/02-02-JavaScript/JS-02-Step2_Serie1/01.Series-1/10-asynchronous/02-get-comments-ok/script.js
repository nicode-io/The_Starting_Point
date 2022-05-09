// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPosts((error, tbl) => {
            tbl.forEach(element => {
                window.lib.getComments(element.id, (error, tblComment) => {
                    element.comment = tblComment;
                });
            console.log(tbl);
            });
        });
    });
})();
