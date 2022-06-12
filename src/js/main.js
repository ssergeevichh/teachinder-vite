import '../styles/main.scss'
import { initPupilsStatisticsTable, initTeacherStatisticsTable } from '@/js/user/table'
import { initQuantityOfFavorites } from '@/js/user/favorites-quantity-inner'
import initUserList from '@/js/user/user-list/index'

initQuantityOfFavorites()
initUserList()
initTeacherStatisticsTable()
initPupilsStatisticsTable()
