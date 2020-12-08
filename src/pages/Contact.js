import React from 'react';

export default function Contact() {
    return(
        <div>

            <main>
                <div className="container">
                    <section className="starter-template">
                        <h1>Contact</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Name</label>
                                <input type="name" className="form-control" placeholder="John Smith"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"
                                       placeholder="JohnSmith@gmail.com"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="messageToMe">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
            <footer className="pb-1 pt-1 text-muted text-center text-small navbar-dark bg-dark footer">
                <span>© Copyright</span>
            </footer>

        </div>
    )
}
