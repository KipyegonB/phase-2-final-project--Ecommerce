import React from 'react'

function AboutUs() {
    return (
        <div className='about'>
            <h1>About Elite store</h1>
            <p>Type of company-Private</p>
            <p>Nature of business- Retailing</p>
            <p>Headquarter- Nairobi</p>
            <p>Area of operation- Kenya</p>
            <p>Hours of Operation 24HR</p>
            <p>Contact Info: Phone No: +2547000000
                Email: infowebsite@gmai.com
            </p>
            <p>Follow us on social</p>
            <img src='data:image/jpeg;base64,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' alt='oops' />
        </div>
    )
}

export default AboutUs