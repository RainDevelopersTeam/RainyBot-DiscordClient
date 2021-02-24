let shardready = function (shard) {
    console.log(`Client shard ${shard} is ready.`);

    filesys.appendFile(`${shard_logspath}${currentsessiondate}.log`, config.shardready, function (error) {
        if (error) {
            console.log(`=========================`);
            console.log(error);
            console.log("=========================")
        }
    });
}

let sharderror = function (err, shard) {
    console.log(`Client shard ${shard} has thrown an error ${err.name}.`);

    filesys.writeFile(`${shard_errorpath}${currenttime.getloggingtime}.log`, config.sharderror, function (error) {
        if (error) {
            console.log(`=========================`);
            console.log(error);
            console.log("=========================")
        }
    }); 
}

let shardreconnect = function (shard) {
    console.log(`Client shard ${shard} is back.`);

    filesys.appendFile(`${shard_logspath}${currenttime.getloggingtime}.log`, config.shardback, function (err) {
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