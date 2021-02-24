const discord = require("discord.js");
const colors = require("chalk");
const filesys = require("fs");

let currenttime = require("./modules/curenttime.js");
let shardlogs = require("./modules/shardlogs.js");

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

const prefix = settings.client.prefix;
const token = settings.client.token;

const shard_errorpath = "./shard_errors/";
const shard_logspath = "./shard_logs/";

let currentsessiondate = currenttime.getloggingtime;

client.login(token);

client.on("shardReady", function (shard) {});
cilent.on("shardError", function (err, shard) {});
client.on("shardReconnecting", function (shard) { });

