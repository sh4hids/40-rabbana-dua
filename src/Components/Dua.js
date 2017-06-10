import React, { Component } from 'react';

export default class Dua extends Component {
  playDua(id){
    let audioDua = document.getElementById(id),
    audioControl = document.getElementById(id + '_Control');
    if(audioDua.paused){
      audioControl.className = "fa fa-pause";
      audioDua.play();
    } else {
      audioControl.className = "fa fa-play";
      audioDua.pause();
    }
  }
  render(){

    return(
      <div className="section">
        <p className="Ar">{this.props.dua.ar}</p>
        <p className="Bn">{this.props.dua.bn}</p>
        <p className="ref">[{this.props.dua.qref}]</p>
        <audio id={this.props.dua.id} src={this.props.dua.aFile}  preload='none'></audio>
        <button className="playBtn" onClick={this.playDua.bind(this, this.props.dua.id)}><i className="fa fa-play" id={this.props.dua.id + "_Control"} aria-hidden="true"></i> উচ্চারণ</button>
      </div>
    );
  }
}
