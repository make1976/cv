import React from 'react'
import { data } from "../../Data/data";
import "./Languages.css"
export function Languages() {
    return (
        <div className='Languages'><h2>Languages</h2>
            <>
                {data.languages.map((val, index) => (
                    <>
                        <p href="">{val.name}</p>
                        <p href="">{val.percentage}</p>
                        <br />

                    </>
                ))}


            </>
        </div>




    )
}