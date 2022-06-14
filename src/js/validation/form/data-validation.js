import { rulesHandling, createErrorData } from "./rules-handling"

export default function validateFormData(data, rules) {
  const errors = []
  const dataEntries = Object.entries(data)

  dataEntries.forEach(([inputName, value]) => {
    const field = rules.find(field => field.name === inputName)
    if (field) {
      field.rules.every((rule) => {
        const ruleHandling = rulesHandling.find(ruleHandling => ruleHandling.name === rule.ruleName)
        if (!ruleHandling.func(value, rule.value)) {
          errors.push(createErrorData(rule.message || ruleHandling.defaultMessage, inputName))

          return false
        }

        return true
      })
    }

  })
  return errors
}