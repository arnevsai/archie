const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./archie-data/config.json");

client.on('ready', () => {
	console.log(`Starting Archie Sai...`);
	console.log(`Username: ${client.user.username}`);
	console.log(`Archie has joined the battlefield!`);
	client.user.setGame("arch help");
});

client.on('message', message => {
	var msg = message.content.toString();
	var args = msg.split(' ');
	//if(msg.author.bot) return;
	if(msg.toLowerCase().startsWith("arch ")) //Does it start with the prefix?
	{
		switch(args[1])
		{
			case "hello":
				message.channel.send("Hello there!");
				break;
			case "about":
				message.channel.send("Archie Sai v1.0\n\nSaiSource Version: sv1-lite");
				break;
			case "help":
				message.channel.send("**Archie Bot Help**\n\n**==Basic Commands==**\narch hello - Say hello!\narch about - Get bot info.\narch invite - Get an instant invite link.\n\n:information_source: Some commands **require mod permissions**!");
				break;
			case "invite":
				
				break;
			default:
				message.channel.send(":warning: Unknown command!");
				break;
		}
	}
});

//log in as rupesh
//client.login("NDE2Mjg0OTUzNTI2MTQwOTI5.DXCPTA.-uszn9uyF0CPm1G4JjvSloJLmLM");
client.login(config.token);
