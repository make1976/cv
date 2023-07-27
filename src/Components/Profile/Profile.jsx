import React from 'react'
import { data } from "../../Data/data";
import "./Profile.css";
export function Profile() {
    return (
        <div className='Profile'><h2>Profile</h2>
                    {data.certificate.map((val, index) => (
                        <>
                            <p href="">{val.date}</p>
                            <p href="">{val.description}</p>
                            <p href="">{val.institution}</p>
                            <p href="">{val.name}</p>
                        </>
                    ))}
        </div>



    )
}

