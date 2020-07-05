import {createAppContainer, StackNavigator} from 'react-navigation'

import HomePage from '../Pages/HomePage'
import DetailPage from '../Pages/DetailPage'

const AppNavigator = createAppContainer({
  // 初始化导航(路由)
  HomePage: {
    screen: HomePage
  },
  DetailPage: {
    screen: DetailPage
  }
})

export default createAppContainer(AppNavigator)