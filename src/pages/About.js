import React, { Component } from 'react';
import "./About.css";
import a from "../assets/ans.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
      <div className="split left">
      <div className="centered">
      <img 
      className="profile_image"
      src= {a} 
      alt="Profile Pic"
      ></img>
      </div>
      </div>
      <div className="split right">
      <div className="centered">
      <div className="name_title">Anshi Mathur</div>
      <div className="brief_description">
      Statistics and Computer Science Student at UIUC
      </div>
      </div>
      </div>
      </div>
    )
  }
}