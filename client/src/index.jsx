import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner.jsx';
import Search from './components/Search.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

    

  render() {
    return (
      <div>
        <Banner />
        <Search />
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('app'));