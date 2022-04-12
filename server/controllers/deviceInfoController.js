const {DeviceInfo} = require('./../models/models');

class DeviceInfoController {
    async create(req, res) {
        const {title, description, deviceId} = req.body;
        const deviceInfo = await DeviceInfo.create({title, description, deviceId})
        return res.json(deviceInfo)
    }

    async getAll(req, res) {
        const deviceInfo = await DeviceInfo.findAll()
        return res.json(deviceInfo);
    }

}

module.exports = new DeviceInfoController();