import React from 'react';

class Form extends React.Component {

  // abstracting the onchange with event targets

  render() {
    return (
      <div>
        <form>
          <input type="text"  name="firstName" onChange={event => this.props.handleChange(event)} value={this.props.formData.firstName}/>
          <input type="text"  name="lastName" onChange={event => this.props.handleChange(event)} value={this.props.formData.lastName}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }

  // return (
  //   render() {
  //     <div>
  //       <form>
  //         <input type="text"  onChange={event => this.handleFirstNameChange(event)} value={this.props.formData.firstName} />
  //         <input type="text"  onChange={event => this.handleLastNameChange(event)} value={this.props.formData.state.lastName} />
  //         <input type="submit"/>
  //       </form>
  //     </div>
  //   )
  // }
}

export default Form;