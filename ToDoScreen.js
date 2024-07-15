import { Component } from "react";

class ToDoScreen extends Component{
    state={
        taskcount: 0,
    }
    render(){
        return(
            <div className="screen">
                <h1 className="ui heading center">To Do List</h1>
                <button onClick={(e)=>{
                    this.setState({
                        ...this.state, taskcount: this.state.taskcount+1,
                    })
                    console.log(this.state.taskcount);
                    console.log("add task button was clicked")
                }} className="ui secondary button">Add Task</button>
                <p>the number of tasks are: {this.state.taskcount}</p>
            </div>
        )
    }
}

export default ToDoScreen;