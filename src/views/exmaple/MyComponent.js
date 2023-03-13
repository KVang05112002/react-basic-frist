import React from 'react';
import ChilComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        fristName: '',
        lastName: '',
        arrJobs: [
            { id: 'job1', title: 'Coffee', salary: '200' },
            { id: 'job2', title: 'Developer', salary: '500' },
            { id: 'job3', title: 'Project managers', salary: '1500' }
        ]
    }

    handleonChangeFristname = (event) => {
        this.setState({
            fristName: event.target.value
        })
    }

    handleChangeLastname = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('Check data input:', this.state)
    }


    render() {

        return (
            <>
                <form action=''>
                    <label htmlFor='fname'>Frist name:</label><br />
                    <input type='text' value={this.state.fristName} onChange={(event) => this.handleonChangeFristname(event)} /><br />
                    <label htmlFor='lname'>Last name:</label><br />
                    <input type='text' value={this.state.lastName} onChange={(event) => this.handleChangeLastname(event)} /><br />
                    <input type='submit' onClick={(event) => this.handleSubmit(event)} />
                </form>

                <ChilComponent
                    name={this.state.fristName}
                    age={'20'}
                    address={'Quy Nhon'}
                    jobs={this.state.arrJobs}
                />
            </>
        )
    }
}




export default MyComponent;