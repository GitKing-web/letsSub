const { createClient } = require("redis");

const client = createClient({
    password: process.env.REDISPASSWORD,
    socket: {
        host: process.env.REDISHOST,
        port: 14140
    }
});

module.exports = client;
