import React from 'react'
import '../componants/Home.css'
// import logo from '../assts/halfpic.png'
import logo from '../assts/final.png'
import resume from '../assts/resume.png'

function Home() {
    return (
        // <div class=" left-right col-12 ">
        <section id="Home">

            <div class=" left-right  ">

                {/* left part---------------------------------------------------------------- */}
                {/* <div className="left col-12 col-sm-5 col-md-5 col-lg-6 col-xl-6 "> */}
                <div className="left ">

                    <div className="text">
                        <h4 class="first_txt">Hello,</h4>
                        <h4 class="second_txt">I'm <span style={{ color: 'yellow' }}>Dhiraj</span>  Wbsite Designer</h4>

                        <p class="para_txt">I'm a motivated web developer that knows how to program both the front and back ends. </p>
                        {/* <button id="Resume"> <img class="resume" src={resume} />  Resume</button> */}

                        <button class="button" type="button">
                            <span class="button__text">Resume</span>
                            <span class="button__icon"><img class="resume" src={resume} alt="" srcset="" /></span>
                        </button>

                    </div>

                </div>



                {/* right part--------------------------------------------------------------- */}
                {/* <div className="right col-12 col-sm-7 col-md-7 col-lg-6 col-xl-6"> */}
                <div className="right">
                    <div className="img">
                        <img id="logo" src={logo} alt="" srcset="" />

                    </div>

                </div>


            </div>
        </section>
    )
}

export default Home
