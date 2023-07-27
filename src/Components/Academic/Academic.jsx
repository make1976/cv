import React from 'react'
import { data } from "../../Data/data";
import "./Academic.css"

export function Academic() {
    return (
        <>
            <div className="container">
                <div className='Academic'>
                    <h2>Academic</h2>
                            {data.Academic.map((val, index) => (
                                <>
                                    <p href="">{val.degree}</p>
                                    <p href="">{val.description}</p>
                                    <p href="">{val.institution}</p>
                                    <p href="">{val.endDate}</p>
                                    <p href="">{val.startDate}</p>
                                </>
                            ))}
                </div>
            </div>
        </>

    )
}
