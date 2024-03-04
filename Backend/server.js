// // 
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hi Anurag Rishi');
// });

// const jokesArray = [
//     { id: 1, title: 'Atom Trust Issues', content: "Why don't scientists trust atoms? Because they make up everything!" },
//     { id: 2, title: 'Parallel Lines', content: "Parallel lines have so much in common. It’s a shame they’ll never meet." },
//     { id: 3, title: 'Embrace Mistakes', content: "I told my wife she should embrace her mistakes. She gave me a hug." },
//     { id: 4, title: 'Break a Leg', content: "Why do we tell actors to 'break a leg'? Because every play has a cast!" },
//     { id: 5, title: 'Playing Piano', content: "I used to play piano by ear, but now I use my hands and fingers." }
// ];

// app.get('/jokes', (req, res) => {
//     res.send(jokesArray);
// });

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });

const express = require('express');
const app = express();
// var cors = require('cors')
// app.use(cors())
//solution one for whitelist jo uppar likhe ha 

// app.get('/', (req, res) => {
//     res.send('Hi Anurag Rishi');
// });

const jokes= [
    { id: 1, title: 'Atom Trust Issues', content: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, title: 'Parallel Lines', content: "Parallel lines have so much in common. It’s a shame they’ll never meet." },
    { id: 3, title: 'Embrace Mistakes', content: "I told my wife she should embrace her mistakes. She gave me a hug." },
    { id: 4, title: 'Break a Leg', content: "Why do we tell actors to 'break a leg'? Because every play has a cast!" },
    { id: 5, title: 'Playing Piano', content: "I used to play piano by ear, but now I use my hands and fingers." }
];

app.get('/api/jokes', (req, res) => {
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
