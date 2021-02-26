const discord = require("discord.js");
const colors = require("chalk");
const filesys = require("fs");

let currenttime = require("./modules/currenttime.js");
let shardlogs = require("./modules/shardlogs.js");
let clientlogs = require("./modules/clientlogs.js");

const client = new discord.Client({
    fetchAllMembers: true,
    messageCacheMaxSize: 1000,
    messageCacheLifetime: 30,
    messageSweepInterval: 60,
    shardCount: 2
});

client.commands = new discord.Collection();

const config = require("./configurations/MainConfiguration.json");
const settings = require("./configurations/ClientSettings.json");

const prefix = settings.ClientSettings.ClientPrefix;
const token = settings.ClientSettings.ClientToken;

const shard_errorpath = "./shard_errors/";
const shard_logspath = "./shard_logs/";

let currentsessiondate = currenttime.getloggingtime();

filesys.open(`${shard_logspath}${currentsessiondate}.log`, "a", function (err, fd) { });

client.login(token).then(function () { consloe.log(colors.bold(`Client logged in on ${currenttime.getcurrenttime()}`)); });

client.on("shardReady", function (shard) { shardlogs.shardready(shard); });
client.on("shardError", function (err, shard) { shardlogs.shardready(err, shard); });
client.on("shardReconnecting", function (shard) { shardlogs.shardready(shard); });
client.on("shardDisconnect", function (event, shard) { shardlogs.shardready(event, shard); });

client.on("ready", function () { clientlogs.readylogs(client); });
client.on("message", function (message) { console.log(message)});

