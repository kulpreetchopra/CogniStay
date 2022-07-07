import { Component } from 'react';
import AuthenticationService from '../Authentication/AuthenticationService';

class UserHomePageComponent extends Component
{
  render()
  {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
      <div className="userHomePageComponent">

        {/* Masthead*/}
        <header className="masthead" >
          <div className="container">
            <div className="masthead-subheading">Welcome <span class="kulpreet">{isUserLoggedIn && <i class="fa fa-user-circle-o"></i> && JSON.parse(window.sessionStorage.getItem('authenticatedUser')).name}</span> To The CogniStay</div>
            <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a className="btn btn-warning btn-xl text-uppercase" href="#services">Tell Me More</a>
          </div>
        </header>

        {/* Services*/}
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase text-muted">Our Services</h2>
              <h3 className="section-subheading text-muted">services</h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <h4 className="my-3">Find Best Match</h4>
                <p className="text-muted">Our approach is straight-forward and always mindful of your needs. We will work with you to come up with the best solution.</p>
              </div>
              <div className="col-md-4">
                <h4 className="my-3">Get access to exclusive deals</h4>
                <p className="text-muted">We are happy to provide with best deal which has numerous filters at your convenience.</p>
              </div>
              <div className="col-md-4">
                <h4 className="my-3">Affordable Price</h4>
                <p className="text-muted">Trustworthy online hotel booking platformto help you choose the best and most suitable hotel as per your budget and preference</p>
              </div>
            </div>
          </div>
        </section>

        {/* About*/}
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">About Us</h2>
              <h3 className="section-subheading text-muted">what and when</h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="./img/about/1.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>JOURNEY begins</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">We have started our hotel service for the users since july 2022.</p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="./img/about/4.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>A Step Ahead</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">Now we are able to serve our customers with atmost support and hospitality.</p></div>
                </div>
              </li>
              <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="./img/about/3.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Upcoming...</h4>
                    <h4 className="subheading">To Deliver More Services</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">We are planning to take a step forward in service delivery and business expansion.</p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Be Part
                    <br />
                    Of Our
                    <br />
                    Story!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="page-section bg-light" id="team">
          <div className="container-fluid">
            <div className="row">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Our Team</h2>
              <div><p className="large text-muted">We as a team, are working together to provide the customers manage their tasks with ease, through our application <h4 className="section-subheading text-muted">CogniStay.com</h4>.</p></div>
          </div>
              
            </div>
          </div>
          <div className='container-fluid'>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div id="rs-team" class="rs-team fullwidth-team pt-100 pb-70">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="team-item">
                    <div class="team-img">
                    <img src="./img/team/1.jpg" alt="..." height="350" />
                        <div class="normal-text">
                            <h4 class="team-name">Kulpreet Chopra</h4>
                            <span class="subtitle">POD Leader (2122375)</span>
                        </div>
                    </div>
                    <div class="team-content">
                        <div class="display-table">
                            <div class="display-table-cell">
                                <div class="share-icons">
                                    <div class="border"></div>
                                    <ul class="team-social icons-1">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-facebook"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-twitter"></i></a>
                                        </li>
                                    </ul>

                                    <ul class="team-social icons-2">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-skype"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-details">
                                    <h4 class="team-name">
                                        <a href="speakers-single.html">Kulpreet Chopra</a>
                                    </h4>
                                    <span class="postion">Kulpreet.Chopra@cognizant.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="team-item">
                    <div class="team-img">
                    <img src="./img/team/2.jpg" alt="..." height="350" />
                        <div class="normal-text">
                            <h4 class="team-name">Anvesha Kulshreshtha</h4>
                            <span class="subtitle">POD Member (2121710)</span>
                        </div>
                    </div>
                    <div class="team-content">
                        <div class="display-table">
                            <div class="display-table-cell">
                                <div class="share-icons">
                                    <div class="border"></div>
                                    <ul class="team-social icons-1">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-facebook"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-twitter"></i></a>
                                        </li>
                                    </ul>

                                    <ul class="team-social icons-2">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-skype"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-details">
                                    <h4 class="team-name">
                                        <a href="speakers-single.html">Anvesha Kulshreshtha</a>
                                    </h4>
                                    <span class="postion">Anvesha.Kulshreshtha@cognizant.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="team-item">
                    <div class="team-img">
                    <img src="./img/team/3.jpg" alt="..." height="350" />
                        <div class="normal-text">
                            <h4 class="team-name">Abhisheka Nand Chaudhary</h4>
                            <span class="subtitle">POD Member (2119373)</span>
                        </div>
                    </div>
                    <div class="team-content">
                        <div class="display-table">
                            <div class="display-table-cell">
                                <div class="share-icons">
                                    <div class="border"></div>
                                    <ul class="team-social icons-1">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-facebook"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-twitter"></i></a>
                                        </li>
                                    </ul>

                                    <ul class="team-social icons-2">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-skype"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-details">
                                    <h4 class="team-name">
                                        <a href="speakers-single.html">Abhisheka Chaudhary</a>
                                    </h4>
                                    <span class="postion">AbhishekaNand.Chaudhary@cognizant.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="team-item">
                    <div class="team-img">
                    <img src="./img/team/4.jpeg" alt="..." height="350" />
                        <div class="normal-text">
                            <h4 class="team-name">Akansha Dewangan</h4>
                            <span class="subtitle">POD Member (2122380)</span>
                        </div>
                    </div>
                    <div class="team-content">
                        <div class="display-table">
                            <div class="display-table-cell">
                                <div class="share-icons">
                                    <div class="border"></div>
                                    <ul class="team-social icons-1">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-facebook"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-twitter"></i></a>
                                        </li>
                                    </ul>

                                    <ul class="team-social icons-2">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-skype"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-details">
                                    <h4 class="team-name">
                                        <a href="speakers-single.html">Akansha Dewangan</a>
                                    </h4>
                                    <span class="postion">Akansha.Dewangan@cognizant.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="team-item">
                    <div class="team-img">
                    <img src="./img/team/5.jpeg" alt="..." height="350" />
                        <div class="normal-text">
                            <h4 class="team-name">Gaurav Gangwar</h4>
                            <span class="subtitle">POD Member (2122276)</span>
                        </div>
                    </div>
                    <div class="team-content">
                        <div class="display-table">
                            <div class="display-table-cell">
                                <div class="share-icons">
                                    <div class="border"></div>
                                    <ul class="team-social icons-1">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-facebook"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-twitter"></i></a>
                                        </li>
                                    </ul>

                                    <ul class="team-social icons-2">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-skype"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-details">
                                    <h4 class="team-name">
                                        <a href="speakers-single.html">Gaurav Gangwar</a>
                                    </h4>
                                    <span class="postion">Gaurav.Gangwar@cognizant.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="team-item">
                    <div class="team-img">
                    <img src="./img/team/6.jpeg" alt="..." height="350" />
                        <div class="normal-text">
                            <h4 class="team-name">Sachin Kumar Gupta</h4>
                            <span class="subtitle">POD Member (2118652)</span>
                        </div>
                    </div>
                    <div class="team-content">
                        <div class="display-table">
                            <div class="display-table-cell">
                                <div class="share-icons">
                                    <div class="border"></div>
                                    <ul class="team-social icons-1">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-facebook"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-twitter"></i></a>
                                        </li>
                                    </ul>

                                    <ul class="team-social icons-2">
                                        <li><a href="abc" class="social-icon"><i class="fa fa-skype"></i></a>
                                        </li>
                                        <li><a href="abc" class="social-icon"><i class="fa fa-linkedin"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="team-details">
                                    <h4 class="team-name">
                                        <a href="speakers-single.html">Sachin Kumar Gupta</a>
                                    </h4>
                                    <span class="postion">SachinKumar.Gupta@cognizant.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* .container-fullwidth */}
</div>
          </div>
        </section>
    </div>    
    );
  }
}



export default UserHomePageComponent;