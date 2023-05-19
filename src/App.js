import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import OrderPage from './pages/private/orders/OrderPage'

const queryClient = new QueryClient()

function App() {

  

  return (<>
    <QueryClientProvider client={queryClient}>
      <OrderPage/>
      {/* <Routes>
        {
          routes && routes.map(item => {
            return <Route path={item.path} element={item.element} />
          })
        }
      </Routes> */}
    </QueryClientProvider>

  </>
  )
}

export default App