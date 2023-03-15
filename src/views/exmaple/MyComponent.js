import React from 'react';
import ChilComponent from './ChildComponent';
import AddComponent from './AddComponent';
//this is father component
class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 'job1', title: 'Coffee', salary: '200' },
            { id: 'job2', title: 'Developer', salary: '500' },
            { id: 'job3', title: 'Project managers', salary: '1500' }
        ]
    }

    addNewJob = (job) => {

        let currentJob = this.state.arrJobs
        currentJob.push(job)
        this.setState({
            // arrJobs: [...this.state.arrJobs, job]
            arrJobs: currentJob
        })
    }

    deleteJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {

        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChilComponent
                    jobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}




export default MyComponent;