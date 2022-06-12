import defaultMesages from '@/js/validation/default-messages'
import { createErrorData, rulesHandling } from './rules-handling'
import { removeFormErrors } from './index'

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
    const errors = []
    const formDataEntries = Object.entries(this.getData(this.form))

    formDataEntries.forEach(([inputName, value]) => {
      const field = this.formFieldRules.find(field => field.name === inputName)
      if (field) {
        field.rules.every((rule) => {
          const ruleHandling = rulesHandling.find(ruleHandling => ruleHandling.name === rule.ruleName)
          if (!ruleHandling.func(value, rule.value)) {
            errors.push(createErrorData(rule.message || defaultMesages[rule.ruleName], inputName))

            return false
          }

          return true
        })
      }
    })
    return errors
  }

  onSuccsess(callback) {
    this.succsessCallbackFunc = callback
  }

  onError(callback) {
    this.errorCallbackFunc = callback
  }
}
