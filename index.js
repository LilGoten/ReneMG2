///////////////////////////////////////////////////////////////////////////////////
//avisar cuando el bot este listo, prefix y demas
const config = require("./config.json");
const Discord = require("discord.js");
const  client = new Discord.Client();
let prefix = config.prefix;
client.on("ready", () => {
  console.log("Listo");
});
///////////////////////////////////////////////////////////////////////////////////
//else if
client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

///////////////////////////////////////////////////////////////////////////////////
//latencia
   if (command === "latencia") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Este mensaje tuvo una latencia de ${timeTaken}MS.`);
   }
///////////////////////////////////////////////////////////////////////////////////
//mis redes sociales
  else if (command === "rrss"){
    const embedDatos = new Discord.MessageEmbed() 
   .setTitle("Redes Sociales De ReneMG2")
   .setAuthor('ReneMG2', 'https://i.postimg.cc/T2gPpFqb/Logo.jpg', 'https://i.postimg.cc/T2gPpFqb/Logo.jpg')
   .setColor(0xC80EB3)
   .setFooter("ReneMG2", client.user.avatarURL())
   .setImage("https://media.giphy.com/media/SKGo6OYe24EBG/giphy.gif")
   .setThumbnail("https://media.giphy.com/media/xT0xeGmfiuGTZ1kUiQ/giphy.gif")
   .addField("Youtube", "https://www.youtube.com/channel/UCerG-9vVBo-nhq0dL4aJWuQ")
   .addField("Twitch", "https://www.twitch.tv/ReneMG2",  true)
  
message.channel.send({ embed: embedDatos });
}
///////////////////////////////////////////////////////////////////////////////////
//Comandos
else if(message.content.startsWith(prefix + 'Comandos')){

  message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
  message.author.send('**COMANDOS DEL BOT "RENEMG2"**\n```\n'+

                      '-> '+prefix+'rrss           : Muestra las redes sociales de ReneMG2.\n'+
                      '-> '+prefix+'avatar <@user> : Muestra el avatar de un usuario.\n'+
                      '-> '+prefix+'decir          : Hace que el bot diga un mensaje.\n'+
                      '-> '+prefix+'user <@user>   : Muestra información sobre un usuario mencioando.\n'+
                      '-> '+prefix+'server         : Muestra información de un servidor determinado.\n'+
                      '-> '+prefix+'latencia       : El bot respondera cuanta latencia tuvo el mensaje.\n'+
                      '-> '+prefix+'ban <@user>    : Banear a un usuario del servidor incluye razon.\n'+
                      '-> '+prefix+'kick <@user>   : Patear a un usuario del servidor incluye razon.\n'+
                      '-> '+prefix+'hola           : Retorna un saludo como mensaje.\n```\n\n'+
                      '**El Sotano - Unete y diviertete con la comunidad: **\nhttps://discord.gg/NGAj8VTdtd');
  
}
///////////////////////////////////////////////////////////////////////////////////
//prueba
else if (command === "reglas") {
  const timeTaken = Date.now() - message.createdTimestamp;
  message.reply(`client.channels.get("779305012052492298")`);
}

});
///////////////////////////////////////////////////////////////////////////////////
//cuando un usuario se une
client.on('guildMemberAdd', (member) => {

  let msgChannel = new Discord.MessageEmbed()
     .setThumbnail(member.user.displayAvatarURL())
     .setTitle('Bienvenido al server ' + member.user.username)
     .setDescription(' ¡Se a unido, acuerdate de pasar por el canal de Reglas y respeta, que tengas una linda estadia en el servidor! ')
     .setFooter('¡Contigo somos ' + member.guild.memberCount + ' miembros!' )
     .setColor("000000") 

   
   let channel = client.channels.cache.get('779330119499251722');
   channel.send(msgChannel);

})
///////////////////////////////////////////////////////////////////////////////////
//cuando un usuario se va
client.on('guildMemberRemove', (member) => {

  let msgChannel = new Discord.MessageEmbed()
     .setThumbnail(member.user.displayAvatarURL())
     .setTitle('Demosle la despedida a ' + member.user.username)
     .setDescription(' ¡Se a ido, nos vemos la proxima caballero, todos quitensen el sombrero! ')
     .setFooter('Sin ti somos ' + member.guild.memberCount + ' miembros.' )
     .setColor("000000") 



   let channel = client.channels.cache.get('780406082794291200');
   channel.send(msgChannel);

})
///////////////////////////////////////////////////////////////////////////////////
//mensaje del bot de error de conexion (por las dudas XD)
client.on('error', (error) => {

// Enviamos un mensaje de información de los errores en un canal X 
  client.channels.cache.get('787468468998897674').send(`Se ha generado una error de conexión\nInformación: **${error}**`)
 
// Por consola
  console.log(`Se ha generado una error de conexión\nInformación: ${error}`);
 
 })
///////////////////////////////////////////////////////////////////////////////////
//token
client.login(config.token);  

//
