import React from 'react';
import D2 from './D2.js';

class MyComponent extends React.Component {
    state = {
        name: 'K Vang',
        fristname: 'Vang',
        secondname: 'Jin'

    }

    handlechangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {

        alert('Thank you click here')
    }

    render() {

        return (
            <div className='youname'>
                <div className='frist'>
                    <input value={this.state.name} type='text' onChange={(event) => this.handlechangeName(event)}></input>
                    <p>Hello My name is {this.state.name} </p>
                </div>
                <div className='second'>
                    <p>My frist name is {this.state.fristname}</p>
                </div>
                <div className='Thrid'>
                    <button onClick={() => this.handleClickButton()}>Click here</button>
                </div>
                <D2 />
            </div>
        )
    }
}




export default MyComponent;