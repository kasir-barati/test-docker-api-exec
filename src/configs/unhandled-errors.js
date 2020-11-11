module.exports = logger => { 
    process.on('unhandledRejection', error => { 
        logger.error(error.message, {});
    });
    process.on('uncaughtException', error => { 
        logger.error(error.message, {});
    });
};