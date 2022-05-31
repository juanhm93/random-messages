const { __esModule } = require("bootstrap");

const messages = [
    "juan",
    "manuel",
    "oriana",
    "marelys"
];

const radomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);
}

module.exports = {radomMsg};

