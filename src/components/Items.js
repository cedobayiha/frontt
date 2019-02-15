import React, {Component} from 'react'
import {connect} from 'react-redux'


function reducer(state, action) {
  switch (action.type) {
    case 'SET_ITEMS': {
      return {...state, items: action.items}
    }
  }
}



class Items extends Component(props) {

  componentDidMount(){
    fetch('http://165.227.42.84:80/getitem/items').then(res => res.json()).then(items => {
      this.props.dispatch({type: 'SET_ITEMS', items: items})
    })
  }

  render() {
    return this.props.items.map(item => <div>
    <img alt="" src={item.image}/>
     </div>)
  }
}

function mapStateToProps(state){
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Items)


