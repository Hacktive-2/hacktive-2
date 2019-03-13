import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Editor from './editor'

/**
 * COMPONENT
 */
export class UserHome extends Component {
  // const {email} = props
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      examples: '',
      showOutput: false,
      loading: false
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange(newValue) {
    this.setState({value: newValue})
  }

  handleSubmit() {
    console.log('sending current state to api', this.state.value)
    axios
      .post('http://localhost:8081/', {code: this.state.value})
      .then(data => {
        console.log('data is', data.data)
        const responseInfo = JSON.parse(Buffer.from(data.data))
        console.log('other', responseInfo)
      })
      .catch(err => console.error('an error happened', err))
  }

  render() {
    return (
      <div>
        <h3>Welcome, {this.props.email}</h3>
        <div>
          <Editor
            onChange={this.onChange}
            value={this.state.value}
            readOnly={false}
            showLineNumbers={true}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Gon push button now
          </button>
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
