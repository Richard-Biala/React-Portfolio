import React from 'react'
import Hero from '../components/Hero';

function ContactPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <p className="contacts">
                Email: rkj128@gmail.com
                <hr/>
                Address: 1668 Powell Pl. West Sacramento, CA 95691
                <hr/>
                LinkedIn: <a href="https://www.linkedin.com/in/richard-biala-1245b61b5/">https://www.linkedin.com/in/richard-biala-1245b61b5/</a>
                <hr/>
                Github: <a href="https://github.com/Richard-Biala">https://github.com/Richard-Biala</a>
            </p>
        </div>
        
    )
}

export default ContactPage
