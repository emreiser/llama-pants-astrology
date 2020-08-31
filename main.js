var LPA = LPA || {};

LPA.capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

LPA.getHoroscope = function(){
  var phraseA, blankA, phraseB, blankB, phraseC, blankC;

  phraseA = [
    "You may find it's finally time to engage your loved ones in difficult conversations about the ... ",
    "The emotional weight you've been carrying may feel like ... ",
    "After deeper reflection, you may be ready to change direction and leave behind the ... ",
    "Remember to stay strong as you may be feeling the cumulative toll of ... "
  ];

  blankA = [
    "COVID toe",
    "camel toe",
    "transfer shed",
    "sun-warmed meat",
    "wet fish wrappers",
    "heavy cream in your coffee",
    "fat camp",
    "urban vermin",
    "warm cat food",
    "almond milk in your fridge",
    "salmon colored flowers"
  ];

  phraseB = [
    "To maintain your inner calm, you'll find solace in ...",
    "... will be your north star through what may feel like a tumultuous moment",
    "Don't forget the peace you've found in ... ",
    "At times when you find yourself overwhelmed or stressed, remember the importance of ...",
    "With some introspection, you'll come to terms with how you've shaped your life around ...",
    "Take a moment today to meditate on ..."
  ];

  blankB = [
    "the treehouse",
    "your face lift",
    "Sparkle Bear",
    "tiger pants",
    "a new tigerprint sofa",
    "coyote pee",
    "roller skates",
    "the Boat Hole Captain",
    "a heavy duvet on a hot summer's night",
    "an inflatable llama suit",
    "sun-warmed meat",
    "fish wrappers",
    "tiger track pants",
    "tiny disco balls",
    "oreos from the Dollar General"
  ];

  phraseC = [
    "As you find your center, you'll find that loved ones may flock to you like ...",
    "... may have you rethinking some of your recent life decisions",
    "Despite all that is on your plate, rest assured that you will find good company in ..."
  ];

  blankC = [
    "unicorns on roller skates",
    "rats after backyard chocolate",
    "flies on wet fish wrappers",
    "tiny plastic hands in a garden bed"
  ];

  var set = [
    "Nevertheless, don't allow yourself to stray from the path you know your heart should follow. ",
    "But take a deep breath and reassess your foundation. ", 
    "So let your creative mind emerge today and offer a reset. ", 
    "However, allow yourself a nap if your body is asking for it. ", 
    "But it's not easy being a magical unicorn so try not to hold yourself to such exacting standards today. "

  ];

  var a = _.sample(phraseA);
  var aBlank = _.sample(blankA);
  var b = _.sample(phraseB);
  var bBlank = _.sample(blankB);
  var c = _.sample(phraseC);
  var cBlank = _.sample(blankC);

  var sentenceA = a.replace("...", aBlank);
  var sentenceB = b.replace("...", bBlank);
  var sentenceC = c.replace("...", cBlank);

  var choose = [sentenceB, sentenceC];

  var horoscope = LPA.capitalize(sentenceA) + ". " + LPA.capitalize(_.sample(set)) + _.sample(choose) + "." 
  $("#text").text(horoscope);

};

$(document).ready(function(){
  $(document).on("click", ".btn", LPA.getHoroscope);
});
