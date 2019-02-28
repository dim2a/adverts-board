import React, { Component } from 'react'
import classes from './CreateAdvert.css'
import { connect } from 'react-redux'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
import {validate, validateForm} from '../../helpers/formHandler'

export function createControl(config, validation) {
  return {
      ...config,
      validation,
      valid: !validation,
      touched: false,
      value: ''
  }
}

function createFormControls() {
  return{
    title: createControl({
      label: 'Заголовок объявления',
      errorMessage: 'Обязательное поле'
    }, {required: true}),
    price: createControl({
      label: 'Цена',
      errorMessage: 'Обязательное поле'
    }, {required: true})
  }
}

class CreateAdvert extends Component {

  state = {
    isFormValid: false,
    categoryId: null,
    formControls: createFormControls()
  }

  changeHandler = (value, controlName) => {
    const formControls = {...this.state.formControls}
    const control = {...formControls[controlName]}

    control.touched = true
    control.value = value
    control.valid = validate(control.value, control.validation)

    formControls[controlName] = control

    this.setState({
      formControls,
      isFormValid: validateForm(formControls)
    })
  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]

      return (
        <Input     
          key={index}     
          label={control.label}
          value={control.value}
          valid={control.valid}
          shouldValidate={!!control.validation}
          touched={control.touched}
          errorMessage={control.errorMessage}
          onChange={event => this.changeHandler(event.target.value, controlName)}
        />
      )
    })
  }

  selectChangeHandler = event => {
    this.setState({
      categoryId: +event.target.value
    })
  }

  render() {
    const select = <Select
      label="Выберите категорию"
      value={this.props.categories}
      onChange={this.selectChangeHandler}
      options={[
        {text:'Техика' ,value:1},
        {text:'Мебель' ,value:2},
        {text:'Одежда' ,value:3},
        {text:'Недвижимость' ,value:4},
        {text:'Авто' ,value:5}
      ]}
      />

 
    return (
      <div className={classes.CreateAdvert}> 
        <h1>Новое объявление</h1>
          <form onSubmit={this.formHandler}>
              {this.renderControls()}
              <label>Тело объявления</label>
              <textarea/>
              {select}
              <button onClick={this.btnHandler} 
              disabled={!this.state.isFormValid}>Создать объявление</button>
              
          </form> 
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdvert)
