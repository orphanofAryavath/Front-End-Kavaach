import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

document.body.style = 'background:#ffccee;';

export class Mainpage extends Component {
    render() {
        return (
            <div>
                <div className = "container">
                    <Jumbotron className="jumb text-center">
                        <h1 className="main">Wedding Lockz</h1>
                        <p className="main">this is the best place for marrigare</p>
                    </Jumbotron>
                </div>
            </div>
        )
    }
}

export default Mainpage
