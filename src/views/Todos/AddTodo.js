import React from "react";
import './Todo.scss';
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnClick = (event) => {
        if (!this.state.title) {
            toast.error('Missing required information');
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1000000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)

        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type='text' value={title} onChange={(event) => this.handleOnChange(event)}></input>
                <button type="submit" className="btn-add" onClick={() => this.handleOnClick()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;