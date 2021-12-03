import './Login.css';
import React from 'react';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Um nome foi enviado: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        const usuarios = [
            {
                user: "Luis Ricardo",
                rm: 88360
            },
        ]
        return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Usuario:
            <input
             type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Senha:
            <input
             type="text" value={this.state2.value} onChange={this.handleChange2} />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
}

export default NameForm;

