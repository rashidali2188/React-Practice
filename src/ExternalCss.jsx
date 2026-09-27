import React from 'react'
import './css/MyStyale.css';
import card from "./css/card.module.css";

function ExternalCss() {
    return (
        <div >
            <h2 className={card.heading}>Learn External Css</h2>
            <div className='container'>
                <div className='list' >

                    <ul>
                        <li className='item'>hello</li>
                        <li className='item'>how</li>
                        <li className='item'>are</li>
                        <li className='item'>you</li>
                    </ul>
                </div>
                <div className='list' >

                    <ul>
                        <li className='item'>hello</li>
                        <li className='item'>how</li>
                        <li className='item'>are</li>
                        <li className='item'>you</li>
                    </ul>
                </div>
            </div>



        </div>
    )
}

export default ExternalCss
