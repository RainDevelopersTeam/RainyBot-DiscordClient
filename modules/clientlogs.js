const discord = require("discord.js");
const colors = require("chalk");
const filesys = require("fs");

let readylogs = function (client) {
    console.log(colors.green("========================="));
    console.log(colors.bold(`Client name: ${client.user.username}`));
    console.log(colors.green("========================="));
}

module.exports.readylogs = readylogs;