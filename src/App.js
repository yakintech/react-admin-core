import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Link, Route, Routes } from 'react-router-dom'
import { routes } from './routes/routes'
import OrderPage from './pages/private/orders/OrderPage'
import './assests/i18n'
import { changeLanguage } from 'i18next'
import { getLanguageStorage, setLanguageStorage } from './utils/storage/languageHelper'
import { Layout } from 'antd';
import LayoutHeader from './components/layouts/Header/LayoutHeader'
import LayoutFooter from './components/layouts/Footer/LayoutFooter'
import LayoutSider from './components/layouts/Sider/LayoutSider'
const { Header, Content, Footer } = Layout;

const queryClient = new QueryClient()

function App() {

  const [currentLanguage, setcurrentLanguage] = useState(getLanguageStorage());


  const changeEnglish = () => {
    changeLanguage('en');
    setcurrentLanguage('en');
    setLanguageStorage('en')
  }

  const changeAzerbaijani = () => {
    changeLanguage('az')
    setcurrentLanguage('az')
    setLanguageStorage('az')


  }

  const changeTurkish = () => {
    changeLanguage('tr')
    setcurrentLanguage('tr')
    setLanguageStorage('tr')

  }

  return (<>
    <QueryClientProvider client={queryClient}>
      <Layout >
      <LayoutSider />
        <Layout>
        <LayoutHeader />
        {/* <h1>{currentLanguage}</h1> */}
        <div>
        

          {/* <button onClick={changeEnglish}>English</button>
          <button onClick={changeTurkish}>Türkçe</button>
          <button onClick={changeAzerbaijani}>Azerice</button> */}

        </div>
        <Routes>
          {
            routes && routes.map(item => {
              return <Route path={item.path} element={item.element} />
            })
          }
        </Routes>
        <LayoutFooter />
        </Layout>
      </Layout>
    </QueryClientProvider>

  </>
  )
}

export default App