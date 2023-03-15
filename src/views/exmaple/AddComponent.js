import React from "react";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: ''
    }

    handleChangeTitleJobs = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing required information');
            return;
        }
        console.log('check submit: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000000),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }



    render() {
        return (
            <>
                <form action=''>
                    <label htmlFor='jobtitle'>Job's title:</label><br />
                    <input type='text' value={this.state.title} onChange={(event) => this.handleChangeTitleJobs(event)} /><br />
                    <label htmlFor='salary'>Salary:</label><br />
                    <input type='text' value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)} /><br />
                    <input type='submit' onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
}

export default AddComponent;