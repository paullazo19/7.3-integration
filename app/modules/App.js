import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getInitialState(){
    return {
      ccNumber: {
        hasError: false
      },
      cvvNumber: {
        hasError: false
      },
      ccName: {
        hasError: false
      },
      date: {
        hasError: false
      },
      allValid: {
        hasError: false
      }
    }
  },
  checkAllInputStates(){
  if (this.state.ccNumber.hasError === true ||
      this.state.cvvNumber.hasError === true ||
      this.state.date.hasError === true ||
      this.state.ccName.hasError === true) {

      this.setState({
        allValid: {
          hasError: true
        }
      })} else {
      this.setState({
        allValid: {
          hasError: false
        }
      })
    }
  },
  handleCCNumberInputChange(e){
    if (!Validator.isCreditCard(e.target.value)) {
      this.setState({
        ccNumber: {
          hasError: true
        }
      });
    }else{
      this.setState({
        ccNumber: {
          hasError: false
        }
      })
    }
    this.checkAllInputStates();
  },
  handleCVVNumberInputChange(e){
    if (!Validator.isLength(e.target.value, {min:3, max: 3})) {
      this.setState({
        cvvNumber: {
          hasError: true
        }
      });
    }else{
      this.setState({
        cvvNumber: {
          hasError: false
        }
      })
    }
    this.checkAllInputStates();
  },
  handleCCNameInputChange(e){
    if (!Validator.isLength(e.target.value, {min:2, max: 500})) {
      this.setState({
        ccName: {
          hasError: true
        }
      });
    }else{
      this.setState({
        ccName: {
          hasError: false
        }
      })
    }
    this.checkAllInputStates();
  },
  handleDateInputChange(e){
    if (!Validator.isAfter(e.target.value)) {
      this.setState({
        date: {
          hasError: true
        }
      });
    }else{
      this.setState({
        date: {
          hasError: false
        }
      })
    }
    this.checkAllInputStates();
  },
  render() {
    console.log(this.state.date);
    return (
      <main className={this.state.allValid.hasError? "card--error" : "card"}>

        <h1 className="card__title">
          <span className="card__title--firstWord">your</span>Bank
        </h1>

        <form className="input__container">

          <input className={ this.state.ccNumber.hasError? "input__ccNumber--error" : "input__ccNumber"} type="text" pattern="[0-9]{16}" onChange={this.handleCCNumberInputChange} placeholder="xxxxxxxxxxxxxxxx"/>

          <h3 className="input__cvvNumber--label">cvv</h3>
          <input className={ this.state.cvvNumber.hasError? "input__cvvNumber--error" : "input__cvvNumber"} type="text" pattern="[0-9]{3}" onChange={this.handleCVVNumberInputChange} placeholder="xxx"/>

          <h3 className="input__date--label">good<br/>thru</h3>
          <input className={this.state.date.hasError? "input__date--error" : "input__date"} type="date" pattern="" onChange={this.handleDateInputChange} />


          <input className={ this.state.ccNumber.hasError? "input__name--error" : "input__name"} type="text" pattern="[A-Za-z]{2,}" onChange={this.handleCCNameInputChange} placeholder="your name"/>
          <img className="logo--visa" src="webpack/assets/images/visa.png"/>

        </form>
      </main>
    )
  }
})
