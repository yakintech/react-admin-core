import React from 'react'
import CategoryPage from './pages/private/CategoryPage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import AddCategory from './pages/private/AddCategory'
import { routes } from './routes/routes'

const queryClient = new QueryClient()

function App() {
  return (<>
    <QueryClientProvider client={queryClient}>
      <Routes>
        {
          routes && routes.map(item => {
            return <Route path={item.path} element={item.element} />
          })
        }
      </Routes>
    </QueryClientProvider>

  </>
  )
}

export default App