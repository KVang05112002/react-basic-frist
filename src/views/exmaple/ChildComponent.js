import React from 'react';
import './childComponent.scss';
// This is child component


class ChilComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowJob = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleonClickDelete = (job) => {
        console.log('check delete job: ', job)
        this.props.deleteJob(job)
    }

    render() {
        console.log('check data: ', this.props)
        //this is the case write short code
        let { jobs } = this.props
        let { showJobs } = this.state
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='btn' onClick={() => this.handleShowJob()} >Show</button>
                    </div>
                    :
                    <>
                        <div className='jobs-list'>
                            {
                                jobs.map((item, index) => {

                                    return (
                                        <div key={item.id}>
                                            <ul>
                                                <li>{item.title} - {item.salary} $ <></> <span onClick={() => this.handleonClickDelete(item)}>x</span></li>
                                            </ul>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button className='btn' onClick={() => this.handleShowJob()}>hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChilComponent = (props) => {
//     let { jobs } = props
//     return (
//         <>
//             <div className='jobs-list'>
//                 {
//                     jobs.map((item, index) => {

//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChilComponent;