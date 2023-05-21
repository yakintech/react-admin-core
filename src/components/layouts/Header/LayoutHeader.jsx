import React, { useContext, useState } from 'react';
import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import './LayoutHeader.scss';
import { getLanguageStorage, setLanguageStorage } from '../../../utils/storage/languageHelper';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { BellFilled } from '@ant-design/icons';
import { HeaderTitleContext } from '../../../store/HeaderTitleContext';

const LayoutHeader = () => {
  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(getLanguageStorage());
  const { title,changeTitle  } = useContext(HeaderTitleContext);

  const changeEnglish = () => {
    changeLanguage('en');
    setCurrentLanguage('en');
    setLanguageStorage('en');
  //  changeTitle('English Title');

  };

  const changeAzerbaijani = () => {
    changeLanguage('az');
    setCurrentLanguage('az');
    setLanguageStorage('az');
  };

  const changeTurkish = () => {
    changeLanguage('tr');
    setCurrentLanguage('tr');
    setLanguageStorage('tr');
  };

  return (
    <div>
      <Header className="header">
        <h1>{t(title)}</h1>
        <div>
          <button onClick={changeEnglish}>En</button>
          <button onClick={changeTurkish}>Tr</button>
          <button onClick={changeAzerbaijani}>Az</button>
          <BellFilled />
        </div>
      </Header>
    </div>
  );
};

export default LayoutHeader;
