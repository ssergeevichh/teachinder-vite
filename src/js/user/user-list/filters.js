
import createFilteringForm from '../../forms/filter-form'
import { filterUsersByParams } from '../filtering-sorting'

export const initUserListFilters = (list, filterParams) => {
  const topUsersList = document.querySelector('#top-teachers-list')
  const searchParams = []

  const filteringForm = createFilteringForm(filterParams, {
    onChange({ name, value, filterType }) {
      const paramIndex = searchParams.findIndex(({ name: paramName }) => paramName === name)

      if (paramIndex) {
        searchParams[paramIndex].value = value
      }
      else {
        searchParams.push({
          name,
          value,
          filterType,
        })
      }

      const filteredUsers = filterUsersByParams(list.users, searchParams)
      list.setUserList(filteredUsers)
    },
  })

  topUsersList.before(filteringForm)
}
