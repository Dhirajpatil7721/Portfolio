import React from 'react'
import '../componants/Navbr.css';
import dhiraj from '../assts/dhraj.png';


function Navbar() {
    return (
     

        // <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-dark mt-4 ml-5" id="nav">
        <nav class="navbar sticky-top navbar-expand-lg navbar-light  " id="nav">
            {/* <a class="navbar-brand" id="band_name" href="#">Dhraj Patil</a> */}

            <img id='name' src={dhiraj} alt="dhiraj" srcset="" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" id="ul">
                    <li class="nav-item active">
                        <a class="nav-link" href="Home">Home </a>
                        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Project</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Certification</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Contact</a>
                    </li>
                </ul>
                
            </div>
        </nav>
    );
}


export default Navbar
