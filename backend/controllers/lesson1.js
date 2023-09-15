const jeremyRoute = (req, res) => {
    res.send('Hello Jeremy!');
};

const helloRoute = (req, res) => {
    res.send('Hello World!');
};

module.exports = {  //export the routes
    helloRoute,
    jeremyRoute
};
