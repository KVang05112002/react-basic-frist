import React from "react";
import { toast } from "react-toastify";

class ContentTodo extends React.Component {

    state = {
        editTodo: {}
    }
    handleDelete = (todo) => {
        this.props.deleteTodo(todo)
        toast.success('Delete Succcessful')
    }

    handleEditTodo = (todolist) => {
        let { editTodo } = this.state
        let { arrTodo } = this.props;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todolist.id) {
            let arrTodoCopy = [...arrTodo]

            let objIndex = arrTodoCopy.findIndex((item => item.id === todolist.id));

            //Update object's title property.
            arrTodoCopy[objIndex].title = editTodo.title
            this.setState({
                arrTodo: arrTodoCopy,
                editTodo: {}
            })
            toast.success('Update TodoList Succcessful')
            return;
        }
        //edit
        this.setState({
            editTodo: todolist
        })
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { arrTodo } = this.props;
        let { editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('check empty: ', isEmptyObj);
        return (
            <div className="list-todo-content">
                {arrTodo && arrTodo.length > 0 &&
                    arrTodo.map((item, index) => {
                        return (
                            <div className="todo-content" key={item.id}>
                                {isEmptyObj === true ?
                                    <span>{index + 1} - {item.title}</span>
                                    :
                                    <>
                                        {editTodo.id === item.id ?
                                            <span>{index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnchangeEditTodo(event)} /></span>
                                            :
                                            <span>{index + 1} - {item.title}</span>
                                        }
                                    </>
                                }
                                <button className="btn-exit" type="button" onClick={() => this.handleEditTodo(item)}>
                                    {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                </button>
                                <button className="btn-delete" type="button" onClick={() => this.handleDelete(item)}>delete</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ContentTodo;