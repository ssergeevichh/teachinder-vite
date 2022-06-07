import '../styles/main.scss'
import {
  addFilterForm,
  addSearchFormListeners,
  fillPupilsStatisticsTable,
  fillTeacherStatisticsTable,
  fillTopUsersList,
} from './page-filing'

import { initUserList } from '@/js/user/user-list'

initUserList()

fillTeacherStatisticsTable()
fillPupilsStatisticsTable()
