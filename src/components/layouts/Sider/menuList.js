import { Link } from "react-router-dom";
import { LayoutFilled, ShopFilled, TeamOutlined, BarChartOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useContext } from "react";
import { HeaderTitleContext } from "../../../store/HeaderTitleContext";

export const useMenuList = () => {
  const { t } = useTranslation();
  const {  changeTitle } = useContext(HeaderTitleContext);
  const change =(item)=>{
   changeTitle(item);
  }

  const getMenuList = () => {
    let menuList = [
      {
        key: 0,
        label: <Link to='/' onClick={() => change("dashboard")}><LayoutFilled />{t("dashboard")}</Link>
      },
      {
        key: 1,
        label: <Link to='/admin/orders' onClick={() => change("order")}><ShopFilled />{t("order")}</Link>
      },
      {
        key: 2,
        label: <Link to='/admin/categories' onClick={() => change("catagories")}><TeamOutlined />{t('catagories')}</Link>
      },
      {
        key: 3,
        label: <Link to='/report' onClick={() => change("reports")}><BarChartOutlined />{t('reports')}</Link>
      },
      {
        key: 4,
        label: <Link to='/customer' onClick={() => change("customers")}><TeamOutlined />{t('customers')}</Link>
      },
    ];

    return menuList;
  };

  return getMenuList();
};
