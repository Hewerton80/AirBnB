const PORT = 3001
module.exports = {
    PORT : process.env.PORT || PORT,
    URL: process.env.URL || `http://localhost:${PORT}`,
}