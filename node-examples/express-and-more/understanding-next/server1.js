var app = require("express")();

/*
 * Remove next() below and add res.end() to see 
 * effect of next() passing the request on to the
 * next app.get("/", ...)
 *
 * NOTE: each app.get() or app.use() etc. gets called
 * in order from top-to-bottom, so order counts.
 */
app.get("/", function (req, res, next) {
    res.write("Hello");
    next();
});

app.get("/", function (req, res, next) {
    res.write(" World");
    res.end();
});

app.listen(3020, () => {
    console.log("Server listening on http://localhost:3020");
});
