require('dotenv').config();


const cors = require('cors');

const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.use(cors({
    origin: "https://chef-portfolio-11.firebaseapp.com/"
}));



server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});