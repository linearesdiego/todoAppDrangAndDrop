import './App.css'
import { Search } from './components/Search/Search'
import { Kanban } from './components/kanban/Kanban'
import { useThemeContext } from './context/ThemeContext'

function App() {
  const { contextTheme, handleClick } = useThemeContext()
  

  return (
    <div className={contextTheme ? 'body' : 'bodyDark' }>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1 className='body_title'>LISTA DE TAREAS</h1>
        {
          contextTheme ?
            <span className='btn' onClick={handleClick}>🌚</span>
            :
            <span className='btn' onClick={handleClick}>☀️</span>
        }
      </div>
      <Search />
      <Kanban />
    </div>
  )
}

export default App
