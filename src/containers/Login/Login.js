import React, { Component } from 'react'
import classes from './Login.css'
import {connect} from 'react-redux'
import Input from '../../components/UI/Input/Input'
import {validateControl} from '../../helpers/formHandler'
import {login} from '../../redux/actions/adverts'

class Login extends Component {

    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Введите Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                  required: true,
                  email: true
                }
            },            
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                  required: true,
                  minLength: 6,
                  maxLength: 100
                }
            }
        }        
    }

    formRender() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
              <Input 
                key={controlName + index}
                type={control.type}
                value={control.value}
                valid={control.valid}
                touched={control.touched}
                label={control.label}
                shouldValidate={!!control.validation}
                errorMessage={control.errorMessage}
                onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    onChangeHandler = (event, controlName) => {
        
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
    
        control.value = event.target.value
        control.touched = true
        control.valid = validateControl(control.value, control.validation)
    
        formControls[controlName] = control
    
        let isFormValid = true
        
        Object.keys(formControls).forEach(name => {
          isFormValid = formControls[name].valid && isFormValid
        })
        this.setState({
          formControls, isFormValid
        })
      }

      btnHandler = event => {
          event.preventDefault()
          const loginData = {
              email: this.state.formControls.email.value,
              password: this.state.formControls.password.value,
              returnSecureToken: true
          }
          this.props.login(loginData)
      }

  render() {
    return (
        <div className={classes.Login}>
        <h1>Введите данные для входа</h1>
        <form onSubmit={this.formHandler}>
            {this.formRender()}
            <button onClick={this.btnHandler} 
                disabled={!this.state.isFormValid}>Вход</button>
        </form>          
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
