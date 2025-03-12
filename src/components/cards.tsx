import React from 'react';
import './cards.css'
import { TranslateTo } from './translateTo'

export function Cards(){
    return(
    <div className="cards-Container">
        <div className="card1">
        </div>
        <div className="card2">
        <TranslateTo></TranslateTo>
        </div>
    </div>
    )
}