import {
    NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
    NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
    THEME_TYPE_LITE,
} from '@/app-constants/ThemeSettings';
import { SettingActions } from '@/app-redux/settings';
import Auxiliary from '@/components/Auxiliary';
import CustomScrollbars from '@/components/CustomScrollbars';
import { Menu } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import AppsNavigation from './AppsNavigation';
import SidebarLogo from './SidebarLogo';
import UserProfile from './UserProfile';

const items = [
    {
        label: 'Trang chủ',
        type: 'group',
        children: [
            {
                label: 'Dashboard',
                key: 'main/dashboard',
                icon: <i className="icon icon-dasbhoard" />,
                children: [
                    {
                        label: 'Crypto',
                        key: 'main/dashboard/crypto',
                        icon: <i className="icon icon-crypto" />,
                    },
                    {
                        label: 'CRM',
                        key: 'main/dashboard/crm',
                        icon: <i className="icon icon-crypto" />,
                    },
                    {
                        label: 'Listing',
                        key: 'main/dashboard/listing',
                        icon: <i className="icon icon-crypto" />,
                    },
                ],
            },
            {
                label: 'QL công việc',
                key: 'main/todo',
                icon: <i className="icon icon-check-square-o" />,
            },
            {
                label: 'Ghi chú',
                key: 'main/notes',
                icon: <i className="icon icon-copy" />,
            },
            {
                label: 'Mạng xã hội',
                key: 'main/personal',
                icon: <i className="icon icon-widgets" />,
            },
        ],
    },
];

function SidebarContent() {
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { auth, settings } = useSelector((state) => state);

    const { user } = auth;
    const { themeType, navStyle, pathname } = settings;

    useEffect(() => {
        dispatch(SettingActions.setPathname(location.pathname));
    }, [location.pathname, dispatch]);

    const getNoHeaderClass = (navStyle) => {
        if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR || navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
            return 'gx-no-header-notifications';
        }
        return '';
    };

    const selectedKeys = pathname.substr(1);
    const defaultOpenKeys = selectedKeys.split('/')[1] || 'dashboard';

    return (
        <Auxiliary>
            <SidebarLogo />
            <div className="gx-sidebar-content">
                <div className={`gx-sidebar-notifications ${getNoHeaderClass(navStyle)}`}>
                    <UserProfile name={user.name} />
                    <AppsNavigation />
                </div>
                <CustomScrollbars className="gx-layout-sider-scrollbar">
                    <div className="gx-menu-group">
                        <Menu
                            defaultOpenKeys={[defaultOpenKeys]}
                            selectedKeys={[selectedKeys]}
                            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
                            mode="inline"
                            items={items}
                            onClick={(e) => navigate('/' + e.key)}
                        />
                    </div>
                </CustomScrollbars>
            </div>
        </Auxiliary>
    );
}

export default SidebarContent;
