

import React from 'react'
import Input from '../composable-components/Input'
import Button from '../composable-components/Button'

const ContactForm = ({ input_number }) => {
    return (
        <div className="contact_form">

            <h3>Contact Us</h3>
            <div className="contact_inputs">
            {

                input_number.map((input) => <Input key={input.toString()} style={input[1].style} title={input[1].title} placeholder={input[1].placeholder} />

                )
            }
<textarea></textarea>
<Button text="Submit"/>
</div>



        </div>
    )
}

export default ContactForm
