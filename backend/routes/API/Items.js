const express = require("express");
const router = express.Router();

const Item = require("../../models/item");

router.get("/", (req, res) => {
  console.log("Request for api/items received");
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.status(200).json(items))
    .catch((err) => res.status(404).send(err.message));
});

router.post("/", (req, res) => {
  const newItem = new Item({
    note: req.body.note,
  });

  newItem.save().then((item) => res.json(item));
});

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
