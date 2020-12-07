import React from 'react';

export default function AboutMe() {
    return(
        <div>
            <header>
                <h1> Son Nguyen </h1>
            </header>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <main>
                <section className="container">

                    <div className="starter-template">
                        <section>
                            <h1>About Me</h1>
                            <img className="img-fluid" src="./Assets/Images/profile.jpg" alt="profile pic"/>
                            <p className="paragraphs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quia
                                adipisci
                                quas
                                autem,
                                officia quo. Nesciunt, delectus consequatur reiciendis cumque placeat sit nihil! Iure
                                minima, et
                                molestias
                                facilis nisi dicta cum eligendi harum! Nisi facere voluptas enim temporibus harum dicta
                                consectetur
                                aliquam
                                beatae tenetur ducimus corporis nesciunt voluptatum quo, blanditiis, voluptatem
                                reprehenderit
                                est
                                illum eius
                                pariatur quibusdam. Minima voluptate beatae inventore, dolorum animi ab dolore ad, ea
                                excepturi
                                tenetur,
                                ducimus id sint molestias facilis? Minima iste magnam nobis adipisci quae, natus eveniet
                                veniam
                                id
                                asperiores eius excepturi vitae rerum deserunt quibusdam debitis autem minus? Quam
                                veritatis
                                dicta
                                pariatur
                                perferendis omnis rem at ipsam nulla. Facilis voluptas, pariatur in consequatur quis
                                corrupti
                                debitis,
                                nostrum illo, nulla et harum quisquam laboriosam dignissimos illum
                            </p>

                            <p className="paragraphs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                                corrupti dicta
                                iusto
                                modi
                                voluptatibus ullam praesentium eum consequatur hic, deleniti nihil nemo molestias
                                reprehenderit
                                et
                                veniam.
                                Ratione amet corrupti est officia a unde debitis perspiciatis eos, excepturi tempore
                                harum
                                voluptas
                                error
                                sapiente quod quos dignissimos ipsam expedita veritatis blanditiis ipsum veniam numquam
                                ipsa?
                                Eos
                                porro
                                tempora quae itaque unde voluptatibus hic velit nisi iste, adipisci sapiente quasi.
                                Fugit eaque
                                architecto
                                repellat neque molestiae illo! A, modi laboriosam corrupti quia perspiciatis nostrum.
                                Laboriosam
                                enim
                                repellendus deleniti, blanditiis ea quos maxime quasi debitis incidunt voluptatibus, a
                                distinctio
                                nihil
                                veniam! Obcaecati, nihil, repellendus iste ipsum sapiente nostrum laborum
                            </p>
                        </section>
                    </div>

                </section>
            </main>


            <footer className="pb-1 pt-1 text-muted text-center text-small navbar-dark bg-dark footer">
                <span>© Copyright</span>
            </footer>

        </div>
    )
}
