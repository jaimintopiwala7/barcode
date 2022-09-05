import './App.css';

import React from 'react';
import Html5QrcodePlugin from './Html5QrcodePlugin.jsx'
import ResultContainerPlugin from './ResultContainerPlugin.jsx'
import HowToUse from './HowToUse.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedResults: [],
      lastRes:null
    }

    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    let data=this.state.decodedResults[this.state.decodedResults.length-1];
    return (
      <div className="App">
        <section className="App-section">
          <div className="App-section-title"> Barcode React demo</div>
          <br />
          
          <Html5QrcodePlugin 
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={this.onNewScanResult}/>
            
          {/* <ResultContainerPlugin results={this.state.decodedResults} /> */}
          <p>Result: {this.state.lastRes}</p>
          </section>
      </div>
    );
  }

  onNewScanResult(decodedText, decodedResult) {
    console.log(
      "App [result]", decodedResult.result.text);
      this.setState({
        lastRes:decodedResult.result.text
      })
    // let decodedResults = this.state.decodedResults;
    // decodedResults.push(decodedResult);
    this.setState((state, props) => {
      state.decodedResults.push(decodedResult);
      return state;
    });
  }
}

export default App;
