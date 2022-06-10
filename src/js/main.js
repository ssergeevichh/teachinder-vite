import '../styles/main.scss'
import { initPupilsStatisticsTable, initTeacherStatisticsTable } from './user/table'
import { initQuantityOfFavorites } from '@/js/user/favorites-quantity-inner'
import { initUserList } from '@/js/user/user-list'

initQuantityOfFavorites()
initUserList()
initTeacherStatisticsTable()
initPupilsStatisticsTable()
