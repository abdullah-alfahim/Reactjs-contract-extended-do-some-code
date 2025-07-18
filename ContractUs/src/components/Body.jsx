import React from 'react'

export default function Body({image}) {
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
                        <form action="">
                            <input type="email" placeholder='Email' />
                            <input type="text" placeholder='Name' />
                            <textarea  name="" id="" cols="30" rows="10"></textarea>
                            <button  type="submit">Submit</button>
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
