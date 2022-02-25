const express = require('express');


/***************************************/
/* Define some constants and variables */
/***************************************/
const app = express();
const port = 3000;

/**********/
/* Route  */
/**********/
app.get('/', (req, res) => {
    // een respons functie
    res.send('Hello World!')
})
//site root


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.get('/about', (req, res) => {
    res.send('Dit page is about me')
})



/*******************/
/* Start webserver */
/*******************/

app.listen(port, () => {
    console.log(`Web server running on http://localhost:${port}`)
});
// ga luisteren naar alle verzoeken in port 3000