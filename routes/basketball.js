const router = require("express").Router();
let Player = require("../models/basketball.model");


// /players endpoint gets us all player information
router.get("/players", async (req, res) => {
  try {
    const player = await Player.find();
    res.send(player);
  } catch {
    res.send(404);
  }
});

// /addplayer lets us add a new player into our database
router.post("/addplayer", async (req, res) => {
  try {
    // we've created a new Player here
    // then we want to store that information and set it to result
    let player = new Player(req.body);
    let result = await player.save();

    res.send(result);
  } catch {
    res.send(500);
  }
});

// hitting the endpoint to return an update to current data
router.put("/editplayer/:id", async (req, res) => {
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
router.delete("/deleteplayer/:id", async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);

    res.send(player);
  } catch {
    res.send(404);
  }
});

module.exports = router;
