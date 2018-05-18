import React, { Component } from 'react';

export class TronIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 236.1 271">
        <line stroke="#fff" strokeWidth="10" x1="3.7" y1="4.7" x2="115.3" y2="134"/>
        <line stroke="#fff" strokeWidth="10" x1="114.6" y1="134" x2="100.2" y2="267.5"/>
        <line stroke="#fff" strokeWidth="15" x1="3.5" y1="3.5" x2="192" y2="48.7"/>
        <line stroke="#fff" strokeWidth="10" x1="192" y1="49.5" x2="114.6" y2="134"/>
        <line stroke="#fff" strokeWidth="15" x1="232.6" y1="76.8" x2="101" y2="267.5"/>
        <line stroke="#fff" strokeWidth="10" x1="115.3" y1="134" x2="231.9" y2="76.8"/>
        <line stroke="#fff" strokeWidth="15" x1="192" y1="48.7" x2="232.6" y2="76.8"/>
        <line stroke="#fff" strokeWidth="10" x1="2.8" y1="4.5" x2="100.2" y2="268.5"/>
      </svg>
    )
  }
}

export class TokensIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
          <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10A8,8 0 0,0 14,2M14,4C17.32,4 20,6.69 20,10C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z" />
      </svg>
    )
  }
}

export class VoteIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
          <path d="M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16M13,14L20,7L18.59,5.59L13,11.17L9.91,8.09L8.5,9.5L13,14Z" />
      </svg>
    )
  }
}

export class WalletIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 20 20">
          <path d="M16 6H3.5v-.5l11-.88v.88H16V4c0-1.1-.891-1.872-1.979-1.717L3.98 3.717C2.891 3.873 2 4.9 2 6v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-1.5 7.006a1.5 1.5 0 1 1 .001-3.001 1.5 1.5 0 0 1-.001 3.001z"/>
      </svg>
    )
  }
}

export class ContactIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 512 512">
          <path d="M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z"/>
      </svg>
    )
  }
}

export class SettingsIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 20 20">
        <path d="M16.783 10c0-1.049.646-1.875 1.617-2.443a8.932 8.932 0 0 0-.692-1.672c-1.089.285-1.97-.141-2.711-.883-.741-.74-.968-1.621-.683-2.711a8.732 8.732 0 0 0-1.672-.691c-.568.97-1.595 1.615-2.642 1.615-1.048 0-2.074-.645-2.643-1.615a8.697 8.697 0 0 0-1.671.691c.285 1.09.059 1.971-.684 2.711-.74.742-1.621 1.168-2.711.883A8.797 8.797 0 0 0 1.6 7.557c.97.568 1.615 1.394 1.615 2.443 0 1.047-.645 2.074-1.615 2.643a8.89 8.89 0 0 0 .691 1.672c1.09-.285 1.971-.059 2.711.682.741.742.969 1.623.684 2.711a8.841 8.841 0 0 0 1.672.693c.568-.973 1.595-1.617 2.643-1.617 1.047 0 2.074.645 2.643 1.617a8.963 8.963 0 0 0 1.672-.693c-.285-1.088-.059-1.969.683-2.711.741-.74 1.622-1.166 2.711-.883a8.811 8.811 0 0 0 .692-1.672c-.973-.569-1.619-1.395-1.619-2.442zM10 13.652a3.652 3.652 0 1 1 0-7.306 3.653 3.653 0 0 1 0 7.306z"/>
      </svg>
    )
  }
}

export class ReceiveIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22H20A2,2 0 0,0 22,20V12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
      </svg>
    )
  }
}

export class SendIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 512 512">
        <path d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"/>
      </svg>
    )
  }
}

export class MoreIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
      </svg>
    )
  }
}

export class ArrowRightIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    )
  }
}

export class SearchIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
    )
  }
}

export class TopRightArrow extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
      </svg>
    )
  }
}

export class CalendarIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path fill="#000000" d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
      </svg>
    )
  }
}