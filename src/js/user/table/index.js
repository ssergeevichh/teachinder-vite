import { formattedUsers } from '../../data/users-data'
import { pupilsColumns, teacherColumns } from '../../data/user-statistics-table-data'
import { sortUsersByField } from '../filtering-sorting'
import { Table } from '@/js/user/table/Table'

export function initTeacherStatisticsTable() {
  const tableContainer = document.querySelector('#table-teachers-wrapper')
  const table = new Table(formattedUsers, teacherColumns, tableContainer, sortUsersByField)

  table.hooks.on('sort-table', (currentColumn) => {
    table.sort(currentColumn)
  })
}

export function initPupilsStatisticsTable() {
  const tableContainer = document.querySelector('#table-pupils-wrapper')
  const table = new Table(formattedUsers, pupilsColumns, tableContainer, sortUsersByField)

  table.hooks.on('sort-table', (currentColumn) => {
    table.sort(currentColumn)
  })
}
