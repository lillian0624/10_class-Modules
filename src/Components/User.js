import React, { Component } from 'react'

export default class User extends Component {

  divRef = React.createRef();

state = {
  count:0,
  test:'hhh',
  obj:{name:'sss', age:'22'}
};

clickHandler = ()=>{
  // this.setState({count:10});
  // this.setState(prevState =>{
  //   return {
  //     count:prevState +1 
  //   }
  // });
  // this.setState({
  //   obj:{...this.state.obj, name:'ddv'}
  // });
  console.log(this.divRef.current);
}

  render() {
    
    // console.log(this.props);
   


    return (
      <div ref={this.divRef}>
        <h1>{this.state.count}--{this.state.test}</h1>
        <h2>{this.state.obj.name}---{this.state.obj.age}</h2>
        <button onClick={this.clickHandler}>click</button>
       
      <ul>
          <li>name:{this.props.name}</li>
          <li>age:{this.props.age}</li>
          <li>gender：{this.props.gender}</li>
      </ul>
      </div>
    )
  }
}
