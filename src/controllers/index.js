const dockerService = require('../services/docker');

module.exports.runCommand = async (req, res, next) => {
    let { command } = req.body;
    let execInstanceId = await dockerService.createExecInstance(command);
    let result = await dockerService.startExecInstance(execInstanceId);

    res.json({
        apiError: null,
        apiData: result,
        apiStatus: 200
    });
};