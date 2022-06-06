export function addParamsForFiltering({ params, currentElement }) {
  const existingParamsIndex = params.findIndex(param => param.key === currentElement.name)
  if (existingParamsIndex !== -1) {
    params.splice(existingParamsIndex, 1)
    params.push({
      key: currentElement.name,
      value: currentElement.value === 'on' ? currentElement.checked : currentElement.value,
      filterType: currentElement.dataset.filtertype,
    })
  }
  else {
    params.push({
      key: currentElement.name,
      value: currentElement.value === 'on' ? currentElement.checked : currentElement.value,
      filterType: currentElement.dataset.filtertype,
    })
  }
}

export function getFullDataFromForm(form) {
  const formData = new FormData(form)
  const obj = {}
  formData.forEach((value, key) => {
    obj[key] = value
  })
  return obj
}
