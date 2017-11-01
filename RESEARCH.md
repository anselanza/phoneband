# TODOs
* <del>Basic recording and upload sound file</del>
* Test recording on mobile browser (currently working on Desktop)
* Play audio back from server on a different page
* Load audio clip into Sonos framework and manipulate

# Notes
##  Mobile recording
### React Mic
Currently using very basic React recorder component from https://github.com/hackingbeauty/react-mic

This retains a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) which, at least in the case of Chrome, is a webm/opus codec clip. Might need to handle different formats (and convert using Webworker on the frontend, or ffmpeg on the backend) in the future.

Also allows for basic visualisation. Will need to customise this.
