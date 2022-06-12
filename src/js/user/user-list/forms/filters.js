import createFilteringForm from '@/js/user/user-list/forms/filter-form'
import { filterUsersByParams } from '@/js/user/helpers/filtering-sorting'

export const initUserListFilters = (list, filterParams) => {
  const searchParams = []

  const filteringForm = createFilteringForm(filterParams, {
    onChange({ name, value, filterType }) {
      const paramIndex = searchParams.findIndex(({ name: paramName }) => paramName === name)
      if (paramIndex !== -1) {
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

  list.container.before(filteringForm)
}
