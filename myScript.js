// Script to find the play

// Play storage.
var activeplay = [];

var plays = [];
plays[0] =
[
  "The Tempest: Act 1, Scene 1", "Ship-Master", "Boatswain", "Mariners", "Alonso", "Sebastian", "Antonio", "Ferdinand", "Gonzalo"
],
  plays[1] =
[
  "The Tempest: Act 2, Scene 1", "Ship-Master", "Boatswain", "Mariners", "Alonso", "Sebastian", "Antonio", "Ferdinand", "Gonzalo"
]

// gives autocomplete options to the 'plays' search box
  var options = '';

  for(var i = 0; i < plays.length; i++)
    options += '<option value="'+plays[i][0]+'" />';

  document.getElementById('plays').innerHTML = options;


// returns the play
function inputPlay()
{
  var search = document.getElementById("playsinput").value;

  for(var i = 0; i < plays.length; i++)
      if (search == plays[i][0])
      {
        activeplay = plays[i];
      }
  printOutput();
}

// This function is triggered by clicking
// the play search button.
function printOutput()
{
  document.getElementById("playtitle").innerHTML = activeplay[0];
    var options = '';
    var numofscenes = activeplay.length - 1;
  for(var i = 1; i <= numofscenes; i++)
    options += '<option value="'+activeplay[i][0]+'" />';
  document.getElementById('scenes').innerHTML = options;
}
