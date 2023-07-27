import React from 'react'
import { data } from "../../Data/data";
import "./Language.css"
export function Languages() {
    return (
        <div className='languages'><h2>Languages</h2>
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