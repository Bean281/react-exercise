import React, { Component } from 'react'

export default class ClassState extends Component {
constructor(){
super()
this.state = {
    count: 0
};
}
  render() {
    return (
      <div>ClassState

        <p>{this.state.count} time</p>
        <button onClick={() => {this.setState({count: this.state.count + 1})}}>Click</button>
        

      </div>
    )
  }
}
