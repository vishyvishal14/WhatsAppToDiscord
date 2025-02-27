const getGuild = async () => await module.exports.dcClient.guilds.fetch(module.exports.settings.GuildID).catch(() => null);
const getCategory = async () => await module.exports.dcClient.channels.fetch(module.exports.settings.CategoryID).catch(() => null);
const getControlChannel = async () => await module.exports.dcClient.channels.fetch(module.exports.settings.ControlChannelID).catch(() => null);

module.exports = {
	settings: {},
	dcClient: null,
	waClient: null,
	chats: {},
	contacts: {},
	startTime: (Date.now() / 1000) | 0,
	profilePicsCache: {},
	logger: null,

	getGuild,
	getCategory,
	getControlChannel,
};