var express = require("express");
var router = express.Router();

// GET del listado de posts
router.get("/", function (req, res, next) {
  res.json({
    users: [
      {
        id: 123,
        name: "Mi primer post",
        user: "123",
        date: "2020-01-02T00:00:00.000Z",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing",
      },
      {
        id: 456,
        name: "Mi segundo post",
        user: "123",
        date: "2021-01-02T00:00:00.000Z",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing",
      },
    ],
  });
});

module.exports = router;
