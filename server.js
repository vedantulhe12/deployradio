const express = require("express");
const player = require("play-sound")();

const app = express();

app.use(express.json());

app.post("/github-webhook", (req, res) => {
    const payload = req.body;

    const developer = payload.pusher?.name;
    const repo = payload.repository?.name;
    const branch = payload.ref?.split("/").pop();

    console.log("Push detected");
    console.log("Developer:", developer);
    console.log("Repo:", repo);
    console.log("Branch:", branch);

    // VEDANT
    if (developer === "vedantulhe12") {
        player.play("./sounds/vedant.mp3", (err) => {
            if (err) console.log(err);
        });
    }

    // JANMEJAY
    if (developer === "Janmejay-Pandya") {
        player.play("./sounds/janmejay.mp3", (err) => {
            if (err) console.log(err);
        });
    }

    // DAKSH
    if (developer === "dakshsahu1803") {
        player.play("./sounds/daksh.mp3", (err) => {
            if (err) console.log(err);
        });
    }

    // BRANCH SPECIFIC
    if (branch === "main") {
        player.play("./sounds/danger.mp3", (err) => {
            if (err) console.log(err);
        });
    }

    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("Webhook server running on port 3000");
});