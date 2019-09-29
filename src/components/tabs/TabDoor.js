import React from "react";
import Img from "../../images/tab-1-pic.png";
import styled from "styled-components";
import Button from "../Button";

function TabDoor() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="tab-icon-door tab-icon"
      id="icon-cancel"
      viewBox="0 0 40 48"
      focusable="true"
      version="1.1"
    >
      <title />
      <path d="M 29.55 18.7 v -4.6 c -5.2 0.4 -4.6 2.8 -4.6 2.8 c 0.3 1.7 2.35 2.35 2.35 2.35 c 0.6 -0.35 2.25 -0.55 2.25 -0.55 Z m 3.7 1 L 33 21.3 c -9.15 -0.3 -8.7 -3.75 -8.7 -3.75 l 0.15 5.2 c 1.1 4.05 8.35 4.2 8.2 4.2 l -0.2 1.5 l 6.9 -3.8 l -6.1 -4.95 Z m -20.3 6.25 c -0.5 -0.5 -1.3 -0.45 -1.8 0.05 c -0.45 0.5 -0.45 1.25 0.05 1.75 s 1.3 0.45 1.75 -0.05 c 0.5 -0.5 0.5 -1.25 0 -1.75 Z m 2.35 -15.9 L 1.5 1.45 V 38.9 l 2.6 1.45 l 11.2 6.2 v -36.5 Z M 1.5 40.35 C 0.4 39.85 0 39.7 0 38.9 l 1.5 1.45 Z M 28.05 28.1 h 1.45 v 10.8 c 0 0.8 -0.65 1.45 -1.45 1.45 H 16.8 v 6.15 c 0 0.849 -0.65 1.5 -1.45 1.5 L 1.5 40.35 L 0 38.9 V 1.45 C 0 0.65 0.65 0 1.5 0 h 26.55 c 0.8 0 1.45 0.65 1.45 1.45 v 11.2 h -1.45 V 1.45 H 4.1 L 15.6 8.6 c 0.95 0.35 1.2 0.65 1.2 1.45 V 38.9 h 11.25 V 28.1 Z" />
    </svg>
  );
}

function TabDoorContent() {
  return (
    <TabContainContainer>
      <div className="container">
        <div className="tab-content">
          <div>
            <span style={{ marginBottom: "2rem" }}>
              If you decide Netflix isn't for you - no problem. No commitment.
              Cancel online anytime.
            </span>
            <br></br>
            <Button style={{ marginTop: "2rem" }}>Try it out</Button>
          </div>
          <div>
            <img src={Img}></img>
          </div>
        </div>
      </div>
    </TabContainContainer>
  );
}

export { TabDoor, TabDoorContent };

const TabContainContainer = styled.div`
  background: var(--main-dark);

  .container{
      margin 0 10%;
  }

  img {
      width: 31.875rem;
  }

  .tab-content {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      grid-gap: 2rem;
      align-items:center;
      font-size:2rem;
      padding:2.5rem;
  }

`;
