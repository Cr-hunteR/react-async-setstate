import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      inputCatcher:[]
    }
  }
  render(){
    return (
      <div className="App">
        <div className="row justify-content-md-center align-items-center row-container">
          <div className="col-md-8">
            <h1>React Live Input Reader</h1>
            <div className="card">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="formGroupExampleInput" onChange={(change)=>{
                    this.setState({inputCatcher:change.target.value},()=>console.log(this.state.inputCatcher));
                    //Console output
                    }}>
                  </input>
                  <p className="para">{this.state.inputCatcher}</p>{/* Main output */}
                </div>
              </form>
            </div>
          </div>
        </div>
  
  
      </div>
    );
  }
  
}

export default App;
