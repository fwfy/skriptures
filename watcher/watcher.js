const child_process = require('child_process');
const exec = require('util').promisify(child_process.exec);
const connector = require('@fwfy/connector');
const Rcon = require('rcon');
const rcon = new Rcon('localhost', 25575, '7e06dcc44adeb44b01359ab3');

connector.connect({
	server: "wss://api.fwfy.club/connector",
	sid: "skripture_watcher"
});

async function downloadAndReload() {
	console.log("COMMIT DETECTED! downloading new scripts and reloading.");
	let { stdout, stderr } = await exec(`./dirtywork.sh`);
	console.log(stdout,stderr);
	rcon.send("sk reload all");
}

connector.on("skripture_hook", data => {
	let msg = JSON.parse(data.msg);
	if(msg.commits) downloadAndReload();
});

rcon.on('auth', () => {
	// rcon.send(" watcher-rcon connected!");
	console.log("logged into rcon successfully!");
});

rcon.on('response', console.log);
rcon.on('server', console.log);

rcon.connect();
