import React from "react";
import './Deshboard_Componets/index.css';
import Vote from './Deshboard_Componets/Election-Icon-us9w3f.png';
import Result from './Deshboard_Componets/electronic_vote_online_election_electionchamp-300x300.png';
import Candidate from './Deshboard_Componets/1677482073445.png';
// import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  // Badge,
  // Button,
  // Card,
  // Navbar,
  // Nav,
  // Table,
  Container,
  // Row,
  // Col,
  // Form,
  // OverlayTrigger,
  // Tooltip,
} from "react-bootstrap";

function Dashboard() {
  const divStyle = {
    display: 'block'};
  return (
    <>
      <Container>
      <div class="links" style={divStyle}>
      <table>
    <ul class="links__list">
    <tr class="links__item">
      <td id="CandiList">
        <a class="links__link" href="#">
          <img src={Candidate} alt="" class="links__icon" />
          <span class="links__text">CANDIDATE LIST</span>
        </a>
      </td><br/>
      <td id="Vote">
        <a class="links__link" href="#">
          <img src={Vote} alt="" class="links__icon" />
          <span class="links__text" id="vote">VOTE HERE</span></a>
      </td><br/>
      <td id="Result">
        <a class="links__link" href="#">
          <img src={Result} alt="" class="links__icon" />
          <span class="links__text" id="res">RESULT</span>
        </a><br/>
      </td>
    </tr>
  </ul>
</table>  
</div>
      </Container>
    </>
  );
}
export default Dashboard;