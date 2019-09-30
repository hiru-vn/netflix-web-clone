import React from "react";
import Button from "../Button";
import styled from "styled-components"
import imgTV from '../../images/tab-tv.png'
import imgTab from '../../images/tab-tablet.png'
import imgMac from '../../images/tab-macbook.png'

function TabDevices() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="tab-icon-device tab-icon"
      viewBox="0 45 145 48"
      focusable="true"
    >
      <title />
      <g id="devices">
        <path
          id="Fill-7"
          d="M 138.211 44.009 c -0.398 0 -0.697 0.349 -0.697 0.748 c 0 0.398 0.3 0.698 0.697 0.698 c 0.4 0 0.749 -0.3 0.749 -0.698 c 0 -0.4 -0.35 -0.748 -0.749 -0.748 Z m -4.19 2.593 h 8.682 V 28.191 h -8.682 v 18.411 Z m -0.05 -19.807 h 8.732 c 0.798 0 1.396 0.598 1.396 1.396 v 18.362 c 0 0.798 -0.598 1.447 -1.396 1.447 h -8.732 c -0.749 0 -1.397 -0.649 -1.397 -1.447 V 28.191 c 0 -0.798 0.648 -1.396 1.397 -1.396 Z M 74.095 44.009 h 48.7 V 13.173 h -48.7 v 30.836 Z m 0 -32.233 h 48.75 c 0.748 0 1.396 0.648 1.396 1.446 v 30.787 c 0 0.798 -0.648 1.396 -1.397 1.396 H 74.095 c -0.797 0 -1.396 -0.598 -1.396 -1.396 V 13.222 c 0 -0.798 0.599 -1.446 1.396 -1.446 Z m 56.583 34.677 v 0.649 c 0 0.499 -0.799 0.898 -1.747 0.898 H 67.66 c -0.998 0 -1.746 -0.4 -1.746 -0.898 v -0.649 h 64.764 Z m -111.567 0.898 v -2.445 c 0 -0.798 0.648 -1.446 1.396 -1.446 h 29.688 c 0.799 0 1.397 0.648 1.397 1.446 v 2.445 h -1.397 v -2.494 H 20.557 v 2.494 H 19.11 Z M 1.397 41.065 h 68.208 V 1.397 H 1.397 v 39.668 Z M 1.397 0 h 68.208 c 0.799 0 1.447 0.599 1.447 1.397 v 39.668 c 0 0.748 -0.648 1.396 -1.447 1.396 H 1.397 A 1.394 1.394 0 0 1 0 41.065 V 1.397 C 0 0.599 0.599 0 1.397 0 Z"
        />
      </g>
    </svg>
  );
}

function TabDevicesContent() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span>
            Whatch TV shows and movies anytime, anywhere - personalized for you.
          </span>
          <Button className="btn">
            Try it now
          </Button>
        </div>
        <div className="tab-bottom-content row">
          <div className="column">
            <div className="wrap">
              <img src={imgTV}></img>
            </div>
            <div className="inner">
              <h3>Watch on your TV</h3>
              <p>Smart TVs, Playtation, Xbox, Chromecast, Apple TV, Blue-ray players and more.</p>
            </div>
          </div>
          <div className="column">
            <div className="wrap">
              <img src={imgTab}></img>
            </div>
            <div className="inner" style={{marginTop:'0.3em'}}>
              <h3>Watch instantly or download later</h3>
              <p>Avalable on phone and tablet, where ever you go.</p>
            </div>
          </div>
          <div className="column">
            <div className="wrap">
              <img src={imgMac}></img>
            </div>
            <div className="inner" style={{marginTop:'0.8em'}}>
              <h3>Use any computer</h3>
              <p>Watch right on Netflix.com</p>
            </div>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}

export { TabDevices, TabDevicesContent };

const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  .tab-top-content {
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5em 0;
  } 

  span {
    grid-column: 1/ span 8;
    font-size: 1.3rem;
  }

  .btn {
    margin: 1.25rem 1.25rem 1.25rem;
    grid-column: 10/ span 12;
  }

  .tab-bottom-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    height:100%;
    flex: 1;
    margin: 0 2em;
  }

  .tab-bottom-content img{
    max-width: 100%; height: auto
  }

  .inner{
    display:flex;
    flex:1;
    flex-direction: column;
    align-items: center;
  }
  .inner p {
    color: var(--main-gray);
    margin-block-start: 0rem;
    text-align: center;
  }
  .inner h3 {
    margin: 0.5rem 0;
    text-align: center;
  }
`
