import { formattedUsers, pupilsData } from '@/js/data/users-data'
import { pupilsColumns, teacherColumns } from '@/js/data/user-statistics-table-data'
import { sortUsersByField } from '@/js/user/helpers/filtering-sorting'
import { Table } from '@/js/user/table/Table'
import { listUpdateBus } from '../user-list'

export function initTeacherStatisticsTable() {
  const tableContainer = document.querySelector('#table-teachers-wrapper')
  const table = new Table(formattedUsers, teacherColumns, tableContainer)
  
  table.hooks.on('table-head-clicked', (currentHead) => {

    const usersToSort = table.users.slice()
    sortUsersByField(usersToSort, currentHead.dataset.name)
    table.fillTable(usersToSort)
  })

  listUpdateBus.on('user-list-updated', (user) => {
    table.addTableItem(user)
  })
}

export function initPupilsStatisticsTable() {
  const tableContainer = document.querySelector('#table-pupils-wrapper')
  const table = new Table(pupilsData, pupilsColumns, tableContainer)
  
  table.hooks.on('table-head-clicked', (currentHead) => {
    const usersToSort = table.users.slice()
    sortUsersByField(usersToSort, currentHead.dataset.name)
    table.fillTable(usersToSort)
  })
}
