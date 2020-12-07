import React from 'react';

export default function Portfolio() {
    return(
        <div>
            <header>
                <h1> Son Nguyen </h1>
            </header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="./index.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./contact.html">Contact</a>
                    </li>
                </ul>
            </nav>
            <main>
                <div className="container">
                    <section className="starter-template justify-content-center">
                        <h1>Portfolio</h1>
                        <section className="container">
                            <div className="row">
                                <div className="col-xs-4 ">
                                    <div className="array-item mb-5 box">
                                        <a href="https://github.com/sotrnguy92?tab=repositories">
                                            <img className="img-fluid" src="./Assets/Images/filler2.jpg"
                                                 alt="filler2_touchCalendar"/>
                                            <div className="bottom-text">Github Repo</div>
                                        </a>
                                    </div>
                                    <div className="array-item mb-5 box">
                                        <a href="https://baytamo.github.io/Project1/">
                                            <img className="img-fluid" src="./Assets/Images/project1.png"
                                                 alt="project 1 landing page"/>
                                            <div className="bottom-text">Project One</div>
                                        </a>
                                    </div>
                                    <div className="array-item mb-5 box">
                                        <img className="img-fluid" src="./Assets/Images/filler4.jpg"
                                             alt="filler4_alarmClock"/>
                                        <div className="bottom-text">Project: TBD</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </main>

            <footer className="pb-1 pt-1 text-muted text-center text-small navbar-dark bg-dark footer">
                <span>© Copyright</span>
            </footer>

        </div>
    )
}
