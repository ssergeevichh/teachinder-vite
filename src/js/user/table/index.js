import { formattedUsers } from '@/js/data/users-data'
import { pupilsColumns, teacherColumns } from '@/js/data/user-statistics-table-data'
import { sortUsersByField } from '@/js/user/helpers/filtering-sorting'
import { Table } from '@/js/user/table/Table'
import { eventBus } from '../favorites-quantity-inner'

export function initTeacherStatisticsTable() {
  const tableContainer = document.querySelector('#table-teachers-wrapper')
  const table = new Table(formattedUsers, teacherColumns, tableContainer, sortUsersByField)
  table.transformItems(sortUsersByField)

  // eventBus.on('users-list-updated', table.fillTable)
}

export function initPupilsStatisticsTable() {
  const tableContainer = document.querySelector('#table-pupils-wrapper')
  const table = new Table(formattedUsers, pupilsColumns, tableContainer, sortUsersByField)
  table.transformItems(sortUsersByField)
}
