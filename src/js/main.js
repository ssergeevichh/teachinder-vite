import '../styles/main.scss'
import { fillUserList } from './user-displaying/user-index'
import { formattedUsers } from './data/users-data'
import fillStatisticsTable from './table/statistics-table'

fillUserList('.teachers-list', formattedUsers)
fillStatisticsTable(formattedUsers)
