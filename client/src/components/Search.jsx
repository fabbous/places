import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   return (
      <div className="container" id="search" >
        <form onSubmit={this.props.submission} onChange={this.props.changes}>
          <input ref="search" type="text" id="button" className= "btn btn-primary float-right" placeholder= " Search Locations" />

        </form>
        </div>
    );
 }
}


export default Search;