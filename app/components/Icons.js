import React, { Component } from 'react';

export class TronIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 236.1 271">
        <line strokeWidth="10" x1="3.7" y1="4.7" x2="115.3" y2="134"/>
        <line strokeWidth="10" x1="114.6" y1="134" x2="100.2" y2="267.5"/>
        <line strokeWidth="15" x1="3.5" y1="3.5" x2="192" y2="48.7"/>
        <line strokeWidth="10" x1="192" y1="49.5" x2="114.6" y2="134"/>
        <line strokeWidth="15" x1="232.6" y1="76.8" x2="101" y2="267.5"/>
        <line strokeWidth="10" x1="115.3" y1="134" x2="231.9" y2="76.8"/>
        <line strokeWidth="15" x1="192" y1="48.7" x2="232.6" y2="76.8"/>
        <line strokeWidth="10" x1="2.8" y1="4.5" x2="100.2" y2="268.5"/>
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
        <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" />
      </svg>
    )
  }
}

export class ArrowLeftIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
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

export class DownloadIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
      </svg>
    )
  }
}

export class BookIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z" />
      </svg>
    )
  }
}

export class QuestionMarkIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
      </svg>
    )
  }
}

export class ShareIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
      </svg>
    )
  }
}

export class BellIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M16,17H7V10.5C7,8 9,6 11.5,6C14,6 16,8 16,10.5M18,16V10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18M11.5,22A2,2 0 0,0 13.5,20H9.5A2,2 0 0,0 11.5,22Z" />
      </svg>
    )
  }
}

export class WebGlobeIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
      </svg>
    )
  }
}

export class QRScanIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M4,4H10V10H4V4M20,4V10H14V4H20M14,15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15M16,15V18H18V15H16M4,20V14H10V20H4M6,6V8H8V6H6M16,6V8H18V6H16M6,16V18H8V16H6M4,11H6V13H4V11M9,11H13V15H11V13H9V11M11,6H13V10H11V6M2,2V6H0V2A2,2 0 0,1 2,0H6V2H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22M2,18V22H6V24H2A2,2 0 0,1 0,22V18H2M22,22V18H24V22A2,2 0 0,1 22,24H18V22H22Z" />
      </svg>
    )
  }
}

export class BackArrowIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
      </svg>
    )
  }
}

export class CloseIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
    )
  }
}

export class CopyIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
      </svg>
    )
  }
}

export class CommentIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M9,9V11H19V9H9M9,13V15H17V13H9Z" />
      </svg>
    )
  }
}

export class TwitterIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
      </svg>
    )
  }
}

export class FacebookIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
      </svg>
    )
  }
}

export class RedditIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M22,11.5C22,10.1 20.9,9 19.5,9C18.9,9 18.3,9.2 17.9,9.6C16.4,8.7 14.6,8.1 12.5,8L13.6,4L17,5A2,2 0 0,0 19,7A2,2 0 0,0 21,5A2,2 0 0,0 19,3C18.3,3 17.6,3.4 17.3,4L13.3,3C13,2.9 12.8,3.1 12.7,3.4L11.5,8C9.5,8.1 7.6,8.7 6.1,9.6C5.7,9.2 5.1,9 4.5,9C3.1,9 2,10.1 2,11.5C2,12.4 2.4,13.1 3.1,13.6L3,14.5C3,18.1 7,21 12,21C17,21 21,18.1 21,14.5L20.9,13.6C21.6,13.1 22,12.4 22,11.5M9,11.8C9.7,11.8 10.2,12.4 10.2,13C10.2,13.6 9.7,14.2 9,14.2C8.3,14.2 7.8,13.7 7.8,13C7.8,12.3 8.3,11.8 9,11.8M15.8,17.2C14,18.3 10,18.3 8.2,17.2C8,17 7.9,16.7 8.1,16.5C8.3,16.3 8.6,16.2 8.8,16.4C10,17.3 14,17.3 15.2,16.4C15.4,16.2 15.7,16.3 15.9,16.5C16.1,16.7 16,17 15.8,17.2M15,14.2C14.3,14.2 13.8,13.6 13.8,13C13.8,12.3 14.4,11.8 15,11.8C15.7,11.8 16.2,12.4 16.2,13C16.2,13.7 15.7,14.2 15,14.2Z" />
      </svg>
    )
  }
}

export class TranslateIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z" />
      </svg>
    )
  }
}

export class PersonIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="24" height="24" viewBox="0 0 24 24">
        <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
      </svg>
    )
  }
}

export class SquareLoadingIcon extends Component {
  render() {
    return (
      <svg className={this.props.className} width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><rect x="41.5" y="41.5" width="5" height="5" fill="#39414e">
        <animate attributeName="fill" values="#626f84;#39414e;#39414e" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0s" calcMode="discrete"></animate>
      </rect><rect x="47.5" y="41.5" width="5" height="5" fill="#39414e">
        <animate attributeName="fill" values="#626f84;#39414e;#39414e" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.125s" calcMode="discrete"></animate>
      </rect><rect x="53.5" y="41.5" width="5" height="5" fill="#39414e">
        <animate attributeName="fill" values="#626f84;#39414e;#39414e" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.25s" calcMode="discrete"></animate>
      </rect><rect x="41.5" y="47.5" width="5" height="5" fill="#39414e">
        <animate attributeName="fill" values="#626f84;#39414e;#39414e" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.875s" calcMode="discrete"></animate>
      </rect><rect x="53.5" y="47.5" width="5" height="5" fill="#39414e">
        <animate attributeName="fill" values="#626f84;#39414e;#39414e" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.375s" calcMode="discrete"></animate>
      </rect><rect x="41.5" y="53.5" width="5" height="5" fill="#39414e">
        <animate attributeName="fill" values="#626f84;#39414e;#39414e" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.75s" calcMode="discrete"></animate>
      </rect><rect x="47.5" y="53.5" width="5" height="5" fill="#39414e">
        <animate attributeName="fill" values="#626f84;#39414e;#39414e" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.625s" calcMode="discrete"></animate>
      </rect><rect x="53.5" y="53.5" width="5" height="5" fill="#39414e">
        <animate attributeName="fill" values="#626f84;#39414e;#39414e" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.5s" calcMode="discrete"></animate>
      </rect></svg>
    )
  }
}

