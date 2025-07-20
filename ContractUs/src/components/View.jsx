import React from 'react'
import { useOutletContext } from 'react-router'

export default function View() {
    const { data } = useOutletContext()
    
    return (
        <div>
            <h1>Requests:</h1>
            {data.map((item, index) => (
                <div className='request' key={index}>
                    <p>Name: {item.name}</p>
                    <p>Email: {item.email}</p>
                    <p>Message: {item.message}</p>
                </div> 
            ))}
        </div>
    )
}