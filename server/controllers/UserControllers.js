class UserControllers {
  async getUsers(req, res) {
    res.status(200).json({ data: "data" });
  }

  async createUser(req, res) {
    res.status(200).send("getUsers");
  }

  async deleteUser(req, res) {
    res.status(200).send("getUsers");
  }
}

module.exports = new UserControllers();
