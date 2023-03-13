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

    render() {

        return (
            <>
                <AddComponent />

                <ChilComponent
                    jobs={this.state.arrJobs}
                />
            </>
        )
    }
}




export default MyComponent;