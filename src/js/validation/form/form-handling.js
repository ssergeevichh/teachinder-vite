/* eslint-disable no-throw-literal */
import { defaultMesages } from '@/js/validation/default-messages'
import { createErrorData, rulesHandling } from '@/js/validation/rules-handling'

export function getFullDataFromForm(form) {
  const formData = new FormData(form)
  const obj = {}
  formData.forEach((value, inputName) => {
    obj[inputName] = value
  })
  return obj
}

export function validateData(formData, formFieldRules) {
  const errors = []
  const formDataEntries = Object.entries(formData)

  formDataEntries.forEach(([inputName, value]) => {
    const field = formFieldRules.find(field => field.name === inputName)

    field.rules.every((rule) => {
      const ruleHandling = rulesHandling.find(ruleHandling => ruleHandling.name === rule.ruleName)
      if (!ruleHandling.func(value, rule.value)) {
        errors.push(createErrorData(rule.message || defaultMesages[rule.ruleName], inputName))

        return false
      }

      return true
    })
  })
  return errors
}
