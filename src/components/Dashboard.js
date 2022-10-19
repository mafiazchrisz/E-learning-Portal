import React from 'react'
import './Dashboard.css'
import team from '../images/team.png'
import mango from '../images/mango.png'
import moodle from '../images/moodle.png'

function Dashboard() {
  return (
    <div className="container-box">
        <div className="container-header">Dashboard</div>
            <div className="platform">
                <a href="https://www.microsoft.com/en/microsoft-teams/log-in" target="_blank" className="Team">
                <img class="Team" src={team} /> Microsoft Team</a>
                <a href="https://mango.cmu.ac.th/" target="_blank" className="Mango">
                <img class="Mango" src={mango}/> Mango CMU</a>
                <a href="https://elearning.cmu.ac.th/login/index.php" target="_blank" className="Moodle">
                <img class="Moodle" src={moodle}/> KC-Moodle CMU</a>
            </div>    
    </div>
  )
}

export default Dashboard