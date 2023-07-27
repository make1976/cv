import React from 'react'
import { data } from "../../Data/data";
import "./Skills.css";

export function Skills() {
    return (
        <>
            <div className="skills-container">
                <div className='Skills'><h2>Skills</h2>
                            {data.skills.map((val, index) => (
                                <>
                                    <p href="" className='skills-name'>{val.name} {val.percentage}</p>

                                </>
                            ))}
                </div>
            </div>
        </>

    )
}


