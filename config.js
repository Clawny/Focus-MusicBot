module.exports = {
	helpCmdPerPage: 10,
	lyricsMaxResults: 5,
	adminId: "UserId", 
	token: process.env.token || "", 
	clientId: process.env.clientId || "", 
	clientSecret: process.env.clientSecret || "", 
	port: process.env.PORT || 4200, // Fixed: dynamically binds to Railway's port
	scopes: ["identify", "guilds", "applications.commands"], 
	inviteScopes: ["bot", "applications.commands"], 
	serverDeafen: true, 
	defaultVolume: 100, 
	supportServer: "https://discord.gg/sbySMS7m3v", 
	Issues: "https://github.com/SudhanPlayz/Discord-MusicBot/issues", 
	permissions: 277083450689, 
	disconnectTime: 30000, 
	twentyFourSeven: false, 
	autoQueue: false, 
	autoPause: true, 
	autoLeave: false, 
	debug: true, 
	cookieSecret: "CodingWithSudhan is epic", 
	website: "http://localhost:4200", 
	nodes: [
		{
			identifier: "Main Node", 
			host: process.env.LAVALINK_HOST || "lava.link", // Fixed: Links to your variables
			port: parseInt(process.env.LAVALINK_PORT) || 443, // Fixed: Uses secure port 443
			password: process.env.LAVALINK_PASSWORD || "youshallnotpass", // Fixed: Links to your password
			retryAmount: 200, 
			retryDelay: 40, 
			secure: true, // Fixed: Must be true for lava.link on port 443
		},
	],
	embedColor: "#2f3136", 
	presence: {
		status: "online", 
		activities: [
			{
				name: "Music", 
				type: "LISTENING", 
			},
		],
	},
	iconURL: "https://cdn.darrennathanael.com/icons/spinning_disk.gif", 
};
