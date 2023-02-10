import React, { Component } from 'react'

class StudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 firstName: "Vy",
                 lastName:"Tran",
                 rollNo: 551,
                 age: 21,
                 books: [" Python ", " HTML ", " CSS & Javascript "]
        }
    }

    render() {
        return (
            <div>
                <h1> Welcome!</h1> <hr/>
                <h2> Student Details</h2> <hr/>
                <h3> First Name: {this.state.firstName }</h3>
                <h3> Last Name: {this.state.lastName }</h3>
                <h3> Roll No: {this.state.rollNo } </h3>
                <h3> Age: {this.state.age }</h3>
                <h3> {this.state.books} </h3>
            </div>
        )
    }
}

export default StudentComponent