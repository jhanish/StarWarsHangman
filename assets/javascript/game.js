
var gamePhrases = [
 {phrase: "Darth Vader", blurb: "If you don't know who this is, you've been living on the forest moon of Endor with the Ewoks for the last 40 years!"},
 {phrase: "Luke Skywalker", blurb: "One of the greatest Jedi to ever live.  Defeated Darth Vader, who also happened to be his Dad."},
 {phrase: "Java", blurb: "The tiny little brown cloaked yellow light eyed creatures on Tatooine, who ran a used droid outfit"},
 {phrase: "Han Solo", blurb: "Captain of the Millennium Falcon, smuggler, and outlaw"},
 {phrase: "Millennium Falcon", blurb: "Han Solo's iconic ship"},
 {phrase: "Boba Fett", blurb: "Han Solo's nemesis.  A ruthless bounty hunter working for the Empire"},
 {phrase: "Kylo Ren", blurb: "Darth Vader's grandson, Han Solo and Princess Leia's son, Luke Skywalker's nephew.  Of course this kid is a mess."},
 {phrase: "Po Dameron", blurb: "The best pilot in the resistance, AND supposedly the galaxy."},
 {phrase: "Slave One", blurb: "Boba Fett's iconic ship.  One of the coolest looking spaceship designs ever, and also looks kind of like his helmet, increasing it's awesomeness by at least 20%."},
 {phrase: "Supreme Leader Snoke", blurb: "His history is a mystery, but his name pretty much says it all.  Supreme baddy, got smacked down by his best student, Kylo.  Note to Kylo: Maybe skip the student thing, it doesn't always go so well for you guys."},
];

function getNewPhrase() {
  var which = gamePhrases[Math.floor(Math.random() * gamePhrases.length)];
}

