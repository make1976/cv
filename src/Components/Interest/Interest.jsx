import React from 'react'
import { data } from "../../Data/data";
import "./Interest.css";

export function Interest() {
    return (
        <>
            <div className="Interest"><h2>Interest</h2>
                <>
                    {data.interest.map((val) =>(
                        <>
                            {val}<br/>
                        </>
                    ))}
                </>
            </div>
        </>

    )
}