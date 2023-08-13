/*********** HEADER *********** */
var app = document.querySelector('header');
  
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .changeDelay(24)
  .typeString('Bienvenu sur <strong> EMS </strong>, Organisation de Serveur : <strong> 100% Farm2Win </strong>')
  .pauseFor(6000)
  .deleteChars(15)
  .typeString('<strong> Semi-Moddé </strong> ')
  .pauseFor(6000)
  .deleteChars(12)
  .typeString('<strong> KitMap </strong> ')
  .pauseFor(6000)
  .deleteChars(12)
  .typeString('<strong> Practice </strong> ')
  .pauseFor(6000)
  .deleteChars(12)
  .typeString('<strong> PvPfaction </strong> ')
  .pauseFor(6000)
  .start();

/*********** FIN ANIMATION HEADER *********** */