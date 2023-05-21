import React ,{useState} from 'react'
import './LayoutSider.scss'
import { useMenuList } from './menuList';
import { CaretLeftOutlined ,} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useTranslation } from 'react-i18next';

//import { Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const LayoutSider = () => {
    const {t} = useTranslation();

  const [checkSider, setcheckSider] = useState(true)
    const closeSider = () => {
        setcheckSider(!checkSider)
    }
    return (

        <Sider className={checkSider ? "sider sider-active" : "sider sider-close"}>
          <div className="close-part"> <CaretLeftOutlined className={checkSider?"close":"close close-active"} onClick={closeSider} /></div>
          <Menu
                theme="white"
                mode="vertical"
                style={{ height: '100vh' }}
                defaultSelectedKeys={[2]}
                items={useMenuList()}
            /> 
        </Sider>

    )
}

export default LayoutSider
