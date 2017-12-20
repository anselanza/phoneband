import React from 'react';
import { ReactMic } from 'react-mic';
import axios from 'axios';

class Sampler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      record: false
    }

  }

  startRecording = () => {
    this.setState({
      record: true
    });
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    let formData = new FormData();

    formData.append("sample", new File([recordedBlob.blob], "sample.webm", { type: "audio/webm;codecs=opus" }));
    axios.post("/upload", formData);

  }

  render() {
    return (
      <div>
      <ReactMic
        record={this.state.record}
        className="sound-wave"
        onStop={this.onStop}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <button onClick={this.startRecording} type="button">Start</button>
      <button onClick={this.stopRecording} type="button">Stop</button>
      </div>
    );
  }
}

export default Sampler;
