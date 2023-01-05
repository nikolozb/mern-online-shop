class DeviceControllers {
  async getDevice(req, res) {
    res.status(200).json({ message: "success" });
  }

  async createDevice(req, res) {
    res.send("createDevice");
  }
}

module.exports = new DeviceControllers();
