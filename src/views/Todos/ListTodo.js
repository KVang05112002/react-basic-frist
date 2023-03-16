import React from "react";
import './Todo.scss';
import AddTodo from "./AddTodo";
import ContentTodo from "./ContentTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        arrTodo: [
            { id: '1', title: 'Do homework' },
            { id: '2', title: 'Learn Reactjs' },
            { id: '3', title: 'Relax with music' }
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            arrTodo: [...this.state.arrTodo, todo]
        })

        toast.success('Wow so easy!')
    }

    deleteTodo = (todo) => {
        let currentTodo = this.state.arrTodo
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            arrTodo: currentTodo
        })
    }

    render() {

        return (
            <>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <ContentTodo
                        arrTodo={this.state.arrTodo}
                        deleteTodo={this.deleteTodo}
                    />
                </div>
            </>
        )
    }
}


export default ListTodo;