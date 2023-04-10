class HelloController {
  async index(req, res) {
    return res.json({ hello: "Hello, Mongo" });
  }
}

export default new HelloController();
