/**
Various useful functions
**/

function getRandomInt(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}

function getRandomElement (list){
  return list[Math.floor(Math.random()*list.length)];
}

function getFixationTime (){  //get randomized time of fixation by randomly choosing from 0.5, 1 and 1.5s
  var fixationTime = getRandomElement([500, 1000, 1500]);
  return fixationTime;
}

function getStimuliList (max){ //get a list of stimuli
  var stimuliUnshuffled = [];
  for(i = 1; i < pictureAmount; i++){
    stimuliUnshuffled.push('stimuli/' +i+ '.jpg');
  }
  return jsPsych.randomization.shuffle(stimuliUnshuffled);
}

function getStimuli () { //function to get the first stimuli
  var curr_stim = stiumliShuffled[0];
  var stim = curr_stim //add the path the stim
  return stim;
}

function trialTrnaision (){
  stiumliShuffled.shift()
}

function getWord (){
  return wordList[0];
}


function checkResponse(data){ //check repeated response
// after one practice trial and two trials, we begin to test whether choice is the same as previous two
  var lastRating = jsPsych.data.get().last(1).filter({trial_type:'image-slider-response'}).values()[0].response
  if (lastRating=="0"){
    alertNumber += 1;
    alert('It seems that you have not rated the picture and just pressed continue.Please make sure to rate the picture. Getting 4 of alerts during this session will lead to a termination of the study.');
    if (alertNumber == 4){
      alert("Hi! You've made too much errors in typing the word suggesting that you are not paying attention to the task. The task will be Terminated");
      window.close();
  } else {}
  }
}
function checkTyping() {
  var lasttrialdata = jsPsych.data.getLastTrialData().select('responses').values[0];
  var lasttrialdata2 = JSON.parse(lasttrialdata).Q0;
  if (wordList[0] != lasttrialdata2){      //test if type correctly
    alertNumber += 1;
    alert("Attention! Please type the word correctly. If this alert (or any other) shows up for 4 times, the experiment will be automatically terminated.");
    if (alertNumber == 4){
      alert("Hi! You've made too much errors in typing the word suggesting that you are not paying attention to the task. The task will be Terminated");
      window.close();
    }else{
      return true;}
    return true;
  }else {
    wordList.shift();
    falseAnswer = 0;
      return false}
}


function getButtons() {
    var trialButtons = [
    '<button class="jspsych-btn" style="color:white; font-size: 24px; padding: 26px ;background-color:black; position: fixed; left:25%;top:40%; width: 210px;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.9);border-radius: 50%">%choice%</button>',
    '<button class="jspsych-btn" style="color:white; font-size: 24px; padding: 26px ;background-color:red;position: fixed; left:62%;top:40%;width: 210px;box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.9);border-radius: 50%">%choice%</button>'
    ];
    myButtons = [];
    myButtons.push(trialButtons);
    //alert (myButtons)
    return myButtons[myButtons.length -1];
  }

function getNextSlide () {  //use to shift instruction slides
  var currentSlide = slideList.shift();
  return currentSlide;
}

//data/server communication
function saveData(filename, filedata, callback, error_callback){
   $.ajax({
      type: 'post',
      cache: false,
      url: 'https://web.stanford.edu/~amitgold/cgi-bin/save_data.php',
      data: {filename: filename, filedata: filedata},
      success: callback,
      error: error_callback
   });
}
