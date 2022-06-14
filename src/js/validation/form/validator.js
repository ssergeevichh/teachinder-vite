import { removeFormErrors } from './index'
import validateFormData from './data-validation'

export class Validator {
  constructor(formSelector, { rules, onSuccsessCallback, onErrorCallback }) {
    this.form = document.querySelector(formSelector)
    this.formFieldRules = rules
    this.onSuccsessCallback = onSuccsessCallback
    this.onErrorCallback = onErrorCallback
    this.form.addEventListener('submit', (event) => {
      event.preventDefault()
      this.formInit(event)
    })
  }

  succsessCallbackFunc = null
  errorCallbackFunc = null

  formInit() {
    removeFormErrors(this.form)
    const errors = this.validate()
    if (errors.length === 0) {
      this.succsessCallbackFunc ? this.succsessCallbackFunc(this.getData(), this.form) : this.onSuccsessCallback(this.getData(), this.form)
    } else
      this.onErrorCallback ? this.onErrorCallback(errors, this.form) : this.errorCallbackFunc(errors, this.form)
  }

  getData() {
    const formData = new FormData(this.form)
    const obj = {}
    formData.forEach((value, inputName) => {
      obj[inputName] = value
    })
    return obj
  }

  validate() {
    return validateFormData(this.getData(), this.formFieldRules)
  }

  onSuccsess(callback) {
    this.succsessCallbackFunc = callback
  }

  onError(callback) {
    this.errorCallbackFunc = callback
  }
}
