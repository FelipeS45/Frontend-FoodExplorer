import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyles from "./styles/global"

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import {SignIn} from "./pages/signIn"
import {SignUp} from "./pages/signUp"
import {Home} from './pages/home'
import { Dish } from './pages/dish'
import { EditDish } from './pages/editDish'
import { NewDish } from './pages/newDish'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider theme = {theme}>

      <GlobalStyles/>

      <EditDish/>

    </ThemeProvider>

  </StrictMode>
)
