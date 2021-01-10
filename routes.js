const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="customMessage"><button type="submit">Send</button></input></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk); // Add each chunk to request body
    }); // Event Listener
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString(); // concatenate our array containing all chunks
      console.log(parsedBody);
      const message = parsedBody.split("=")[1]; // Extract the input value of our form
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }); // Write the value into a file, third argument is a callback function
    }); // Event listener
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>This is my first page</title></head>");
  res.write("<body><h1>Hello From NODE.JS Server !</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;

/* 
Other ways to export: 
module.exports = {
  handler: requestHandler,
  someText: 'Some Hard Coded Text'
};

Or:
module.exports.handler = requestHandler;
module.exports.someText = 'Some Hard Coded Text';

Or:
exports.handler = requestHandler;
exports.someText = 'Some Hard Coded Text';
*/
