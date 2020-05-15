import React from 'react';
import Title from './title';
import Form from './form';

export default class Main extends React.Component {
    render(){
        return(
            <div>
                <Title />
                <Form />
            </div>
        )
    }
}