
## Piloting emotional responses to pictures

This is a repository designed to pilot emotional responses to a set of pictures.  
This task is designed baed on jspsych(https://www.jspsych.org/) which is a javascript library for running experiment. You can modify the questions you ask by changing the plugings suggested by jspsych.

## Here is you do it

1. Clone or download all the files to a local folder.
2. Change the pictures you want to test in the stimuli folder. Change the amount of pictures you want to test by changing the variable *pictureAmount* (number has to be divided by 5 for the attention check to work).
3. Change the amount of trials you want to run by changing the variable *taskNumber*.
4. Change the amount of attention checks you want by changing the variable *attentionCheckInterval*.
5. **If you want to run it on your own computer:** uncomment the local save code on line 173.
6. **If you want to run it online:** the current task downloads data to a Stanford server. If you are from Stanford, it should be fairly easy for you to adapt this. You just need to put the *save_data.php* file in your cgi-bin folder and match the name of the folder in which you save the data with the one in line 180 (saveData). If you are running this task on another server, you will have to do a bit more adjustments, depending on your server space.
7. **If you want to send participants to a qualtrics survey at the end of the task:** just change the address of the qualtrics survey at the end of the task file.

## A few cool features of this task
1. **Attention check 1:** every 5 trials, participants are asked to copy a word. If they are wrong 4 times the task is terminated.
2. **Attention check 2:** if participants don't rate the picture but just press continue they get a warning. After 4 trials the task is terminated.
