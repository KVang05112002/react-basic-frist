import React from "react";

class AddComponent extends React.Component {

    state = {
        titleJobs: '',
        salary: ''
    }

    handleChangeTitleJobs = (event) => {
        this.setState({
            titleJobs: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('check submit: ', this.state)
    }

    render() {
        return (
            <form action=''>
                <label htmlFor='jobtitle'>Job's title:</label><br />
                <input type='text' value={this.state.titleJobs} onChange={(event) => this.handleChangeTitleJobs(event)} /><br />
                <label htmlFor='salary'>Salary:</label><br />
                <input type='text' value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br />
                <input type='submit' onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}

export default AddComponent;