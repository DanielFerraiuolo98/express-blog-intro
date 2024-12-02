/*### * Esercizio *
    Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
- Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
- Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags(tags è un array di stringhe)
    - Creiamo poi una rotta / bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
- Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
- Testare su postman*/

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const post = require("./public/images/post.js")

app.get("/", (req, res) => {
    res.send("<h1> Server del mio blog </h1>");
});

app.get("/bacheca", (req, res) => {
    const posts = req.query.post;
    let stories = [...post];
    stories = {
        contatore: post.length,
        posts: post,
    }
    if (posts) {
        stories = post.filter((immagine) => {
            return immagine === posts;
        });
        if (!stories) {
            stories = {
                error: "post non trovato",
            }
        }
    }
    res.json(stories);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});