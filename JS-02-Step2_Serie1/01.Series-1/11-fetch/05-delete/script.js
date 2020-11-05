// 11-fetch/05-delete/script.js - 11.5: supprimer un élément

// Thanks to Calvin Jitnaree https://github.com/Calvin781
(() => {
    document.getElementById("run").addEventListener("click", () => {
        let id = document.getElementById('hero-id').value
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let deleteId = async function () {
            let promise = fetch(`http://localhost:3000/heroes/${id}`, options)
                .then(res => {
                    if (res.ok) {
                        return Promise.resolve(`L'utilisateur a bien été supprimé`);
                    } else {
                        return Promise.reject(`Une erreur est survenue`);
                    }
                }).then(res => console.log(res));
        }
        deleteId();
    })
})()
