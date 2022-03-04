const express = require('express');


/***************************************/
/* Define some constants and variables */
/***************************************/
const app = express();
const port = 3000;

/**********/
/* Routes */
/**********/

app.get('/', (req, res) => {
    // een respons functie
    res.send('Hello World!')
});

//load view engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



/*app.get('/', (req, res) => {
    // een respons functie
    res.send('Hello World!')
})
//site root


app.get('/niels', (req, res) => {
    res.send('Hello Niels!')
})

app.get('/michiel', (req, res) => {
    res.send('Hello Michiel')
})

app.get('/name/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
})*/

/******************/
/* Error handling */
/******************/
app.use((req, res) => {
    res.status(404).send('Error 404: File not found')
});



/*******************/
/* Start webserver */
/*******************/

app.listen(port, () => {
    console.log(`Web server running on http://localhost:${port}`)
});
// ga luisteren naar alle verzoeken in port 3000