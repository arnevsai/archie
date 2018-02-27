const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./archie-data/config.json");

var games = ["in the park", "arch help", "archie simulator", "at home"];

client.on('ready', () => {
	console.log(`Starting Archie Sai...`);
	console.log(`Username: ${client.user.username}`);
	console.log(`Archie has joined the battlefield!`);
	client.user.setGame(games[Math.floor(Math.random() * games.length)]);
});

client.on('message', message => {
	try
	{
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
					message.channel.send("**Archie Bot Help**\n\n**==Basic Commands==**\narch hello - Say hello!\narch about - Get bot info.\narch roll - Roll a die.\n**==Mod Commands==**\narch kick <@user> - Kick @user.\narch ban <@user> - Ban @user.\n\n:information_source: Some commands **require mod permissions**!");
					break;
				case "roll":
					message.channel.send(":game_die: You got " + (Math.floor(Math.random() * 6) + 1).toString());
					break;
				case "ban":
					if(!message.member.hasPermission("BAN_MEMBERS"))
					{
						message.channel.send(":warning: You do not have permission to ban people!");
						return;
					}
					var mention = message.mentions.members.first();
					if(mention == null)
					{
						message.channel.send(":warning: No user was mentioned!");
						return;
					}
					mention.ban();
					message.channel.send(":information_source: The user " + mention.user.username + " has been banned.");
					//Add to userlog
					break;
				case "kick":
					if(!message.member.hasPermission("KICK_MEMBERS"))
					{
						message.channel.send(":warning: You do not have permission to kick people!");
						return;
					}
					var mention = message.mentions.members.first();
					if(mention == null)
					{
						message.channel.send(":warning: No user was mentioned!");
						return;
					}
					mention.kick();
					message.channel.send(":information_source: The user " + mention.user.username + " has been kicked.");
					//Add to userlog
					break;
				case "eval":
					if(message.author.id == "380571469618610177")
					{
						eval(message.content.substr(9));
					}
					break;
				default:
					message.channel.send(":warning: Unknown command!");
					break;
			}
		}
	}
	catch(e)
	{
		message.channel.send("**Archie Exception Occured**\n```" + e.toString() + "```");
	}
});

//log in as rupesh
//client.login("NDE2Mjg0OTUzNTI2MTQwOTI5.DXCPTA.-uszn9uyF0CPm1G4JjvSloJLmLM");
client.login(config.token);
