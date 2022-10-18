import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="container-box">
        <div className="container-header">Dashboard</div>
            <div className="platform">
                <a href="https://www.microsoft.com/en/microsoft-teams/log-in" target="_blank" className="Team">Microsoft Team</a>
                <a href="https://mango.cmu.ac.th/" target="_blank" className="Mango">Mango CMU</a>
                <a href="https://elearning.cmu.ac.th/login/index.php" target="_blank" className="Moodle">KC-Moodle CMU</a>
            </div>    
    </div>
  )
}

export default Dashboard