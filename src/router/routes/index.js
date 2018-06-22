import Home from '@/components/Home'
import Page404 from '@/components/Page404'
import Stocks from '@/components/Stocks'
import PortFolio from '@/components/PortFolio'

export default [
  { path: '/', component: Home },
  { path: '*', component: Page404 },
  { path: '/stocks', component: Stocks },
  { path: '/portfolio', component: PortFolio }
]
