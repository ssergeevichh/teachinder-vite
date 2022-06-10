import EventBus from 'js-event-bus'
import { createElement } from '@/js/helpers/helper'

export class Table {
  constructor(users, columns, container, func) {
    this.users = users
    this.columns = columns
    this.container = container
    this.func = func
    this.hooks = new EventBus()

    this.container.appendChild(this.init())
  }
  transformationCallback = null

  init() {
    const table = createElement('table', {
      className: 'statistics-table',
    })

    const tableBody = createElement('tbody', {
      className: 'statistics-table__body',
    })

    const tableHead = createElement('thead', {
      className: 'statistics-table__head',
    })
    tableHead.addEventListener('click', ({ target }) => {
      const usersToSort = this.users.slice()
      this.transformationCallback(usersToSort,target.dataset.name)
      this.fillTable(usersToSort)
    })
    const tableHeadRow = document.createElement('tr')

    table.appendChild(tableHead)
    table.appendChild(tableBody)
    tableHead.appendChild(tableHeadRow)

    this.columns.forEach((column) => {
      const tableHeadCell = createElement('td', {
        'textContent': column.title,
        'data-name': column.name,
      })
      const directionImg = createElement('img', {
        srcset: column.directionImgPath,
      })
      tableHeadCell.appendChild(directionImg)
      tableHeadRow.appendChild(tableHeadCell)
    })

    this.users.forEach(user => tableBody.appendChild(this.createTableRow(user, this.columns)))
    return table
  }

  fillTable(users) {
    const tableBody = this.container.querySelector('.statistics-table__body')
    tableBody.innerHTML = ''
    users.forEach(user => tableBody.appendChild(this.createTableRow(user, this.columns)))
  }

  createTableRow(user) {
    const tableItem = document.createElement('tr')
    this.columns.forEach((column) => {
      const tableRowItem = createElement('td', {
        textContent: user[column.name],
      })
      tableItem.appendChild(tableRowItem)
    })

    return tableItem
  }

  transformItems(callback) {
    this.transformationCallback = callback
  }
}
