import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyles from "./styles/global"

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import {SignIn} from "./pages/signIn"
import {SignUp} from "./pages/signUp"
import {Home} from './pages/home'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider theme = {theme}>

      <GlobalStyles/>

      <Home/>

    </ThemeProvider>

  </StrictMode>
)
