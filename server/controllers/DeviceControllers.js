class DeviceControllers {
  async getDevice(req, res) {
    res.status(200).send("getDevice");
  }

  async createDevice(req, res) {
    res.send("createDevice");
  }
}

module.exports = new DeviceControllers();
