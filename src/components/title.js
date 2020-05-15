import React from 'react';
import './component.css';

export default class Title extends React.Component {
    render(){
        return(
            <header>
                <h1 className="title">Bin2Dec Converter</h1>
            </header>
        )
    }
}