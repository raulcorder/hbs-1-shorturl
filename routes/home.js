const express = require("express");
const router = express.Router();

router.get("/", (requ, res) => {
  const urls = [
    { origin: "www.google.com/bluuweb1", shortURL: "lkjghkg1" },
    { origin: "www.google.com/bluuweb2", shortURL: "lkjghkg2" },
    { origin: "www.google.com/bluuweb3", shortURL: "lkjghkg3" },
    { origin: "www.google.com/bluuweb3", shortURL: "lkjghkg3" },
  ];
  res.render("home", { urls: urls });
});

module.exports = router;
