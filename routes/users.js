const router = require("express").Router();
let Player = require("../models/users.model");

// /players endpoint gets us all player information
router.get("/", async (req, res) => {
  try {
    const player = await Player.find();
    res.send(player);
  } catch(error) {
    res.status(404).send(error);
  }
});

router.get("/gender/:gender", async (req, res) => {
  try {
    const findGender = await Player.find( { gender: { $in: [`${req.params.gender}`] } } )
    res.send(findGender);
  } catch(error) {
    res.status(404).send(error);
  }
});

// /addplayer lets us add a new player into our database
router.post("/add", async (req, res) => {
  console.log(req.body)
  try {
    // we've created a new Player here
    // then we want to store that information and set it to result
    let player = new Player(req.body);
    let result = await player.save();

    res.send(result);
  } catch(error){
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
  } catch(error) {
    res.status(404).send(error);
  }
});

//
router.delete("/deleteusers/:id", async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);

    res.send(player);
  } catch(error) {
    res.status(404).send(error);
  }
});

module.exports = router;
