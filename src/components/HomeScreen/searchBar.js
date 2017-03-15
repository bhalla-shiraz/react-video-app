import React, { Component } from 'react'

class SearchBar extends Component {

   constructor(props) {
      super(props)

      this.state = { term: 'react JS'}
   }

   // onInputChange(event) {
   //    console.log("value of input", event.target.value)
   // }
   // better onChange={event => this.setState({term : event.target.value})}

   render() {
      return <div>
               <input
                  onChange={event => this.setState({term : event.target.value})}
                  value={this.state.term}
                  />

            </div>
   }
}
export default SearchBar


// functional component
// const SearchBar = () {
//    return <input />
// }
