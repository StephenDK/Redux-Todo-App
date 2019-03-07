import React from 'react';
import { connect } from 'react-redux'
import ConnectedGoals from './goals'
import ConnectedTodos from './todos'
import {
  handleInitialData
} from '../actions/shared'


class App extends React.Component {
  componentDidMount() {
      const { dispatch } = this.props

      dispatch(handleInitialData())

      // store.subscribe(() => this.forceUpdate())

  }
  render() {  
      if (this.props.loading === true) {
          return <h3>Loading</h3>
      }

      return (
          <div>
              <ConnectedTodos />
              <ConnectedGoals />  
          </div>
      )
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(App);