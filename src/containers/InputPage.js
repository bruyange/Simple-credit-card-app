import React from 'react'
import InputForm from '../components/Form'

class InputPage extends React.Component {
  submit = values => {
    console.log(values)
  }
  render() {
    return <InputForm onSubmit={this.submit}/>
  }
}

export default InputPage;