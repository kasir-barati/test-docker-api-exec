const axios = require('axios').create({
    baseURL: process.env.DOCKER_API
});

const ErrorResponse = require('../utils/error-response');

module.exports.createExecInstance = async command => { 
    try {
        let response = await axios.post('/containers/0ddac9abb0ee/exec', {
            AttachStdin: false,
            AttachStdout: true,
            AttachStderr: true,
            DetachKeys: "ctrl-p,ctrl-q",
            Cmd: [command],
            End: []
        });
        return response.data.Id;
    } catch (error) {
        throw new ErrorResponse('DockerError', error.message, error.response.status);
    };
};

module.exports.startExecInstance = async id => { 
    try {
        let response = await axios.post(`/exec/${id}/start`, {
            Detach: false,
            Tty: false
        });
        return response.data;
    } catch (error) {
        throw new ErrorResponse('DockerError', error.message, error.response.status);
    };
};