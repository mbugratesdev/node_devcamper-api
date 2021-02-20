module.exports = (server) => {
    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err, promise) => {
        console.log(`Error: ${err.message}`.red)
        // Close server and exit process
        server.close(() => process.exit(1))
    })
}
