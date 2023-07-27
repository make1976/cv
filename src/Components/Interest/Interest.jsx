import React from 'react'
import { data } from "../../Data/data";
import "./Interest.css";

export function Interest() {
    return (
        <>
            <div className="Interest-container">
                <div className="Interest"><h2>Interest</h2>
                    <nav>
                        <ul>
                            <>
                               {data.interest.map((val) =>  (
                                    <>
                                        {val} 
                                    </>
                                ))}
                            </>
                        </ul>
                    </nav>
                </div>
            </div>
        </>

    )
}