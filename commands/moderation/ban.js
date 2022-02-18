const { MessageEmbed } = require("discord.js");

module.exports={
    name: 'ban',
    data:{
        name: 'ban',
        description: 'ban command',
    },
    exec(message, interaction, args, client){
        const utente = message.mentions.members.first() || interaction.options.getUser('utente');
        let motivo = interaction.options.getString('motivo')

        if (!message.member.permissions.has('BAN_MEMBERS') && !interaction.member.permissions.has('BAN_MEMBERS')){
            return message.channel.send('non puoi bannare')
        };
        if (!utente){
            return message.channel.send('non stai bannando nessuno')
        };
        if (!utente.bannable){
            return message.channel.send('non posso bannarlo :/')
        };
            utente.ban()
                .then(()=>{
                    const embed = new MessageEmbed()
                        .setTitle(utente.user.username+' bannato con successo')
                        .setColor('BLURPLE')
                        .setDescription('Utente bannato con successo')
                        .addField('**Motivo**', motivo, true)
                        message.channel.send({embeds:[embed]}) || interaction.reply({embeds:[embed]});
                });
        

    }
};