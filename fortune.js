// Get a random response from list of fortunes

var positive_fortunes = [
  'It is certain!',
  'It is decidedly so',
  'Without a doubt!',
  'Yes – definitely!',
  'You may rely on it',
  'As I see it, yes, Most Likely',
  'Outlook good!',
  'Yes!',
  'Signs point to yes!'
];

var negative_fortunes = [
  'Don’t count on it',
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'very doubtful'
];

var non_committal_fortunes = [
  'Reply hazy',
  'try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate',
  'ask again'
];

// function to change image
function change_image(image) {
  $("#tony_image").attr('src','img/' + image);
}

// Find im age to change to, based on fortune given
function tell_fortune(fortune) {
  if (positive_fortunes.indexOf(fortune) !== -1 ) {
    change_image('good.png');
  } else if (negative_fortunes.indexOf(fortune) !== -1 ) {
    change_image('not_good.png');
  } else if (non_committal_fortunes.indexOf(fortune) !== -1 ) {
    change_image('indifferent.png');
  } else {
    console.log("Something went wrong");
    change_image('trapped.png');
  }
  $("#fortune_response_text").text(fortune.toUpperCase());
}

// Combine all fortune arrays into one
var all_fortunes = non_committal_fortunes.concat(positive_fortunes, negative_fortunes);

// Create random fortune
function random_fortune() {
  return all_fortunes[Math.floor(Math.random() * all_fortunes.length)];
}

$("#fortune_button").click(function() {
    fortune = random_fortune();
    tell_fortune(fortune);
});

$("#crystal_ball").click(function() {
  if ($("#tony_image").attr('src') != "img/trapped.png") {
    $("#tony_image").attr('src','img/trapped.png');
    $("#fortune_response_text").text("HELP GET ME OUT OF HERE!");
  } else {
    $("#tony_image").attr('src','img/free.png');
    $("#fortune_response_text").text("Please don't do that again");
  }
});

console.log('Hey get out of here!')
