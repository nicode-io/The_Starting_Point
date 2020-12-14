import React from "react";

export function Home () {
    return (
        <section>
            <article className={"jumbotron"}>
                <h1>Bienvenue sur le projet FabLab</h1>
                <p>
                    Retrouvez le code source du projet <a className={"btn btn-info"} href={"https://github.com/nicode-io/Fabulab"}>ICI</a>
                </p>
                <p>
                    Pour toute question relative au projet <a className={"btn btn-info"} href={"mailto:fablab@nicode.io"}>EMAIL</a>
                </p>
            </article>
        </section>
    )
}