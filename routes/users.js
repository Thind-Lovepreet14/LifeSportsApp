const router = require("express").Router();
let Player = require("../models/users.model");


// /players endpoint gets us all player information
router.get("/", async (req, res) => {
  try {
    const player = await Player.find();
    res.send(player);
  } catch {
    res.send(404);
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
    console.log(error)
    res.send(500);
  }
});

// hitting the endpoint to return an update to current data
router.put("/edituser/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    player.set(req.body);
    const result = await player.save();
    res.send(result);
  } catch {
    res.send(404);
  }
});

//
router.delete("/deleteusers/:id", async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);

    res.send(player);
  } catch {
    res.send(404);
  }
});

module.exports = router;
