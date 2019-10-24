const router = require("express").Router();
let Player = require("../models/users.model");

// /players endpoint gets us all player information
router.get("/", async (req, res) => {
  try {
    const player = await Player.find();
    res.send(player);
  } catch (error) {
    res.status(404).send(error);
  }
});

// getting the specified gender by manually inputting a query
router.get("/gender/:gender", async (req, res) => {
  try {
    // findGender will separate the genders based on what the user inputs into their profile
    const findGender = await Player.find({
      gender: { $in: [`${req.params.gender}`] }
    });
    res.send(findGender);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/position/:position", async (req, res) => {
  try {
    const findPos = await Player.find({
      position: { $in: [`${req.params.position}`] }
    });
    res.send(findPos);
  } catch (error) {
    res.status(404).send(error);
  }
});

// /addplayer lets us add a new player into our database
router.post("/add", async (req, res) => {
  console.log(req.body);
  try {
    // we've created a new Player here
    // then we want to store that information and set it to result
    let player = new Player(req.body);
    let result = await player.save();

    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// hitting the endpoint to return an update to current data
router.put("/edituser/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    player.set(req.body);
    const result = await player.save();
    res.send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});

<<<<<<< HEAD
//
router.delete("/:id", async (req, res) => {
=======
router.delete("/deleteuser/:id", async (req, res) => {
>>>>>>> brian
  try {
    const player = await Player.findByIdAndDelete(req.params.id);
    res.send(player);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
