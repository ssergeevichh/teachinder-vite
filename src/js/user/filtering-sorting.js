export function filterUsersByParams(arr, searchedParams) {
  return arr.filter(
    user => searchedParams.every(
      (filterParam) => {
        if (filterParam.filterType === 'equal') {
          return user[filterParam.key] === filterParam.value
        }
        if (filterParam.filterType === 'range') {
          let ageRange = filterParam.value.split('-')
          ageRange = [Number(ageRange[0]), Number(ageRange[1])]
          return user[filterParam.key] >= ageRange[0] && user[filterParam.key] <= ageRange[1]
        }
        return false
      },
    ),
  )
}

export function sortUsersByField(users, currentField) {
  const fieldName = currentField.getAttribute('data-name')
  users.sort(
    (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1),
  )
}

export function filterUsersByFieldValue(usersArr, ...values) {
  const keys = ['full_name', 'age']
  return usersArr.filter(obj => values.every(value => keys.some(key => obj[key] === value)))
}
