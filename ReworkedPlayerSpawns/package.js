class Mod
{
    constructor()
    {
		Logger.info("Loading: Reworked Player Spawns");
		ModLoader.onLoad["ReworkedPlayerSpawns"] = require("./src/ReworkedPlayerSpawns.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();