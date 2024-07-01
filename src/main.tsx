import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeStore } from './utils/store/ThemeStore.tsx'
import { UserStore } from './utils/store/UserStore.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserStore>
    <ThemeStore>   
      <App />
    </ThemeStore>
  </UserStore>
  // <React.StrictMode>
  // </React.StrictMode>,
)
