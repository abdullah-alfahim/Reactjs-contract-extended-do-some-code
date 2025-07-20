import React from 'react'
import { useOutletContext } from 'react-router'

export default function Body() {
    const {setData, image } = useOutletContext()

    function add(formData) {
        const email = formData.get('email')
        const name = formData.get('name')
        const message = formData.get('message')

        if(email && name && message){
            setData(prevData => [...prevData, {email, name, message}])
        }
    }

  return (
    <div className="body">
        <div className="inner_body">
            <div className="text_area">
                <h1> CONTACT US</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
            <div className="main_area">
                <div className="form_area">
                    <div className="buttons">
                        <div className="methode">
                            <button>VIA SUPPORT CAHT</button>
                            <button>VIA CALL</button>
                        </div>
                        <div className="email">
                            <button>VIA EMAIL FORM</button>
                        </div>
                    </div>
                    <div className="form">
                        <form action={add} >
                            <input name="email" type="email" placeholder='Email' />
                            <input name="name" type="text" placeholder='Name' />
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="image_area">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
