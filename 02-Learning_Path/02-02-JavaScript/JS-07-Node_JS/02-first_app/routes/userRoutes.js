const jsonfile = require("jsonfile");
const { reset } = require("nodemon");
const datarray = "./DB/users.json";

module.exports = app => {

    // Display the user's list
    app.get("/users", (req, res) => {
        console.log("Fetching all users");

        // Json file reading
        jsonfile.readFile("./DB/users.json", (err, content) => {
            err ? res.send(err) : res.send(content);
        });
    });

    // Create a user
    app.post("/users/new", (req, res) => {
        let { email, username } = req.body
        
        // Read Json file
        jsonfile.readFile(datarray, (err, content) => {
            
            content.push({ email, username });
            console.log(`added ${email} to DB`)

            // Json file writing
            jsonfile.writeFile(datarray, content, (err) => {
                err && console.log(err)
            });
            // Send request is ok
            res.sendStatus(200);
        });
    });

    //  Delete a user
    app.delete("/users/destroy", (req, res) => {
        let email = req.body.email;

        jsonfile.readFile(datarray, (err, content) => {
            content = content.filter(e => e.email != email);

            jsonfile.writeFile("./DB/users.json", content, err => {
                console.log(err);
            });
            res.sendStatus(200);
        });
    });

    // Update a user info 
    app.put("/user", (req, res) => {
        let user;
        let username = req.body.username;
        let email = req.query.email;

        jsonfile.readFile(datarray, (err, content) => {
            for (let i = content.length - 1; i >= 0; i--) {
                if (content[i].email === email) {
                    console.log(`Updated user ${req.query.email} has now ${username} has new username`);

                    user = content[i];
                    user.username = username;
                }
            }
            jsonfile.writeFile(datarray, content, err => {
                console.log(err)
            });
            res.sendStatus(200);
        });
    });

    // Return a user based on his email 
    app.get("/user", (req, res) => {
        let user;
        let email = req.query.email;

        jsonfile.readFile(datarray, function(err, content) {
            for (var i = content.length - 1; i >= 0; i--) {
            if (content[i].email === email) {
                console.log(`Found user ${content[i].username}`);
                user = content[i];
            }
        }
        res.send(user);
        });
    });
}


