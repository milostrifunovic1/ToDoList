import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) => {
        if (this.state.content.length) {
            e.preventDefault();
            this.props.addTodo(this.state);
            this.setState({
                content: ''
            })
        } else {
            e.preventDefault()
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="list row m-auto pb-1 col-12 text-center"
                        type="text"
                        placeholder="What do you need to do?"
                        onChange={this.handleChange}
                        value={this.state.content}>
                    </input>
                </form>
            </div>
        )
    }
}

export default AddTodo


