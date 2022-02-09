"use strict";

class ReworkedPlayerSpawns
{
	static onLoadMod()
	{
		for (const map in DatabaseServer.tables.locations) {
			
			// if map is illegible - skip
			if (map === "develop" || map === "hideout" || map === "lighthouse" || map === "privatearea" || map === "suburbs" || map === "tarkovstreets" || map === "terminal" || map === "town" || map === "base" || map === "bigmap" 
	|| map === "interchange" || map === "laboratory" || map === "woods") {
				continue;
			} else {
				// create empty array for bot spawnpoints
				let newSpawnPointsParams = []
				
				// delete vanilla player spawns
				//Logger.log(map)
				
				for (const spawnPoint in DatabaseServer.tables.locations[map].base.SpawnPointParams) {
					if (DatabaseServer.tables.locations[map].base.SpawnPointParams[spawnPoint].Categories[0] !== "Player") {
						newSpawnPointsParams.push(DatabaseServer.tables.locations[map].base.SpawnPointParams[spawnPoint]);
					}
				}
				DatabaseServer.tables.locations[map].base.SpawnPointParams = newSpawnPointsParams;
			}
		}
		
		// factory day
		JustNUCore.createSpawnPoint("Scav_Bunker_Door", -13.8, -1.2,  38.5, 180, "factory4_day")
		JustNUCore.createSpawnPoint("Cellars", 			 65.7, -1.2, -32.2, 180, "factory4_day")
		JustNUCore.createSpawnPoint("Gate_0", 			-51.7,  2.7,  58,    90, "factory4_day")
		JustNUCore.createSpawnPoint("Gate_1", 			-33.1,  1.6,   9.2,  90, "factory4_day")
		JustNUCore.createSpawnPoint("Gate_2_v1", 		 71.8,  1.6, -61.9,   0, "factory4_day")
		JustNUCore.createSpawnPoint("Gate_2_v2", 		 46.2,  1.5, -40.2,   0, "factory4_day")
		JustNUCore.createSpawnPoint("Gate_3", 			 58.6,  1.7,  58.4, 180, "factory4_day")
		JustNUCore.createSpawnPoint("Gate_Med", 		-19.3,  1.7, -47.6,   0, "factory4_day")
		// factory night
		JustNUCore.createSpawnPoint("Scav_Bunker_Door", -13.8, -1.2,  38.5, 180, "factory4_night")
		JustNUCore.createSpawnPoint("Cellars", 			 65.7, -1.2, -32.2, 180, "factory4_night")
		JustNUCore.createSpawnPoint("Gate_0", 			-51.7,  2.7,  58,    90, "factory4_night")
		JustNUCore.createSpawnPoint("Gate_1", 			-33.1,  1.6,   9.2,  90, "factory4_night")
		JustNUCore.createSpawnPoint("Gate_2_v1", 		 71.8,  1.6, -61.9,   0, "factory4_night")
		JustNUCore.createSpawnPoint("Gate_2_v2", 		 46.2,  1.5, -40.2,   0, "factory4_night")
		JustNUCore.createSpawnPoint("Gate_3", 			 58.6,  1.7,  58.4, 180, "factory4_night")
		JustNUCore.createSpawnPoint("Gate_Med", 		-19.3,  1.7, -47.6,   0, "factory4_night")
		
		// reserve
		JustNUCore.createSpawnPoint("WesternWall", 				-263.0,  -4.7,   47.3, 105, "rezervbase")
		JustNUCore.createSpawnPoint("SouthWestCorner", 			-296.7,  -4.8,  -92.1, 60, 	"rezervbase")
		JustNUCore.createSpawnPoint("NorthHill", 				 -14.4,  19.9,  201.4, 195, "rezervbase")
		JustNUCore.createSpawnPoint("CheckpointOutside", 		  56.6,  -5.5,   90.4, 285, "rezervbase")
		JustNUCore.createSpawnPoint("CheckpointInside", 		  58.4,  -4.8,  104.5, 285, "rezervbase")
		JustNUCore.createSpawnPoint("Garages", 					  84.0,  -5.5,   77.1, 195, "rezervbase")
		JustNUCore.createSpawnPoint("TrainTracks1", 			 227.0,  -5.1, -169.2, 285, "rezervbase")
		JustNUCore.createSpawnPoint("TrainTracks2", 			 219.0,  -5.4, -201.6, 285, "rezervbase")
		JustNUCore.createSpawnPoint("ScavPmcCheckpointOutside",	-126.8,  -5.5, -132.8, 25, 	"rezervbase")
		JustNUCore.createSpawnPoint("ScavPmcCheckpointInside", 	-137.6,  -5.2, -137.3, 25, 	"rezervbase")
		JustNUCore.createSpawnPoint("SouthWall", 				-167.3,  -4.9, -126.0, 15, 	"rezervbase")
		JustNUCore.createSpawnPoint("Bunker1", 					  27.4,  -5.5, -184.5, 15, 	"rezervbase")
		JustNUCore.createSpawnPoint("Bunker2", 					  41.2,  -5.5, -184.3, 15, 	"rezervbase")
		JustNUCore.createSpawnPoint("Bunker3",					  52.9,  -5.5, -187.5, 15, 	"rezervbase")
		JustNUCore.createSpawnPoint("Bunker4", 					  64.8,  -5.5, -190.2, 15, 	"rezervbase")
		JustNUCore.createSpawnPoint("SewerManhole", 			  38.6,  -5.5,   72.6, 195, "rezervbase")
		JustNUCore.createSpawnPoint("D6", 						-117.2, -16.9,  170.0, 150, "rezervbase")
		JustNUCore.createSpawnPoint("ParkingArea", 				  81.7, -14.0,  -43.0, 195, "rezervbase")
		
		// shoreline
		JustNUCore.createSpawnPoint("Tunnel",			  350.0, -58.2,  325.2, 250, "shoreline")
		JustNUCore.createSpawnPoint("Pier", 			 -323.0, -63.1,  524.7, 225, "shoreline")
		JustNUCore.createSpawnPoint("RoadToCustoms", 	 -855.9, -41.1,   12.3,   0, "shoreline")
		JustNUCore.createSpawnPoint("Train1", 			-1026.5, -59.2,  308.5,  20, "shoreline")
		JustNUCore.createSpawnPoint("Train2", 			-1034.2, -59.1,  311.5,  20, "shoreline")
		JustNUCore.createSpawnPoint("OuterWall1", 		 -508.5,  -8.3, -394.0,   0, "shoreline")
		JustNUCore.createSpawnPoint("OuterWall2", 		   21.5, -15.1, -383.1,   0, "shoreline")
		JustNUCore.createSpawnPoint("OuterWall3", 		   26.0, -17.2, -380.7,   0, "shoreline")
		JustNUCore.createSpawnPoint("OuterWall4", 		  463.3, -53.0,  200.3, 200, "shoreline")
		JustNUCore.createSpawnPoint("RockPassage", 		 -195.2, -10.5, -342.6,   0, "shoreline")
		JustNUCore.createSpawnPoint("Hill", 			  451.8, -40.7,  257.2, 180, "shoreline")
    }
}

module.exports = ReworkedPlayerSpawns;