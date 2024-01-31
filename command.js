const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'create',
        description: 'It shortens the URL',
    },
];

const rest = new REST({ version: '10' }).setToken("MTIwMjE4NjkxODQzMjA5NjI4Ng.Gdg2w1.4UxVczUdEXnq8gbktTIXFR5iY6119vldAHrZdQ");

(async ()=>{
try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("1202186918432096286"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}
})();
