const discord = require("discord.js");
const colors = require("chalk");
const filesys = require("fs");

const shard_errorpath = "../shard_errors/";
const shard_logspath = "../shard_logs/";

let currenttime = require("./currenttime.js");

const config = require("../configurations/MainConfiguration.json");
const settings = require("../configurations/ClientSettings.json");

let shardready = function (shard) {
    console.log(`Client shard ${shard} is ready.`);

    let currentsessiondate = currenttime.getloggingtime;

    let data = `[${currenttime.getloggingtime()}] ${config.Shards.ShardIsReady}\n`;

    filesys.appendFile(`${shard_logspath}${currentsessiondate}.log`, data, function (error) {
        if (error) {
            console.log(`=========================`);
            console.log(error);
            console.log("=========================")
        }
    });
}

let sharderror = function (err, shard) {
    console.log(`Client shard ${shard} has thrown an error ${err.name}.`);

    let data = `[${currenttime.getloggingtime()}] ${config.Shards.ShardError}\n`;

    filesys.writeFile(`${shard_errorpath}${currenttime.getloggingtime}.log`, data, function (error) {
        if (error) {
            console.log(`=========================`);
            console.log(error);
            console.log("=========================")
        }
    }); 
}

let shardreconnect = function (shard) {
    console.log(`Client shard ${shard} is back.`);

    let data = `[${currenttime.getloggingtime()}] ${config.Shards.ShardReconnected}\n`;

    filesys.appendFile(`${shard_logspath}${currenttime.getloggingtime}.log`, data, function (err) {
        if (error) {
            console.log(`=========================`);
            console.log(error);
            console.log("=========================")
        }
    }); 
}

let sharddisconnect = function (shard) {
    console.log(`Client shard ${shard} closed with ${event} event.`);

    let data = `[${currenttime.getloggingtime()}] ${config.Shards.ShardDisconnected}\n`;

    filesys.appendFile(`${shard_logspath}${currenttime.getloggingtime}.log`, data, function (err) {
        if (error) {
            console.log(`=========================`);
            console.log(error);
            console.log("=========================")
        }
    });
}

module.exports.shardready = shardready;
module.exports.sharderror = sharderror;
module.exports.shardreconnect = shardreconnect;
module.exports.sharddisconnect = sharddisconnect;