import React from 'react'
import { useTranslation } from 'react-i18next';

function Dashboard() {


    const {t} = useTranslation();

  return (<>
    <h1>{t("dashboard")}</h1>
  </>   
  )
}

export default Dashboard