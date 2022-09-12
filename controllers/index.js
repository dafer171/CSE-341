displayName = (req, res) => {
    const name = "David Fernando Peña";
    res.status(200).send(name);
};

module.exports = {
    displayName,
  };