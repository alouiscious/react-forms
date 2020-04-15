import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <div>
        <form>
          <input type="text"  onChange={event => this.handleFirstNameChange(event)} value={this.props.formData.firstName} />
          <input type="text"  onChange={event => this.handleLastNameChange(event)} value={this.props.formData.state.lastName} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Form;