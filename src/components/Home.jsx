
import React, { useState, useEffect } from 'react'
import './styles.css'
import axios from 'axios'

export default function Home() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        getDetails();
    }, [])

    // function to fetch apidata
    const getDetails = async () => {
        await axios({ method: 'GET', url: 'https://randomuser.me/api' })
            .then((response) => {
                let api_data = response.data.results[0];
                let user_name = api_data.name.first + " " + api_data.name.last
                let mail_id = api_data.email
                console.log(api_data);
                setFullName(user_name);
                setEmail(mail_id);
                localStorage.setItem("username", user_name)
                localStorage.setItem("email", mail_id)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='card_body' >
            <p className='header'>USER DETAILS</p><br />
            <div>
                <label htmlFor="">FULL NAME</label><br />
                <input
                    type="text"
                    className='type_text'
                    placeholder='Username'
                    value={fullName}
                    defaultChecked
                />
            </div>
            <div style={{ marginTop: '10px' }}>
                <label htmlFor="" >EMAIL</label><br />
                <input
                    type='text'
                    className='type_text'
                    placeholder='Email'
                    value={email}
                    defaultChecked
                />
            </div>
            <button onClick={() => getDetails()}>Refresh</button>
        </div>
    )
}
