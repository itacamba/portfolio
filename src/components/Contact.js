import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <h1>Get in Touch.</h1>
                <form>
                    <input type="text" placeholder="Name."/>
                    <input type="text" placeholder="E-mail." />
                    <textarea placeholder="Say Hello." >
                    </textarea>
                    <button>Send</button>
                </form>
                <div className="copyright">
                Design & Built by Carla Sahagun © 2020
                </div>
            </div>
        );
    }
}

export default Contact;