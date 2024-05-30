import React, { useContext } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { ConfigProvider, Dropdown, Space, Typography } from 'antd';
import "./../../assets/CSS/dropdown.scss";
import { ThemeContext } from '../../context/ThemeContext';

function DropdownRender({ menu, selectedEnv }) {
    const { items, selectable, onClick, defaultSelectedKeys } = menu;
    const { theme } = useContext(ThemeContext);

    return (
        <div className='dropdown'>
            <div className='center-dropdown'>
                <ConfigProvider
                    theme={{
                        components: {
                            Dropdown: {
                            // static
                                borderRadiusLG: 25,
                                borderRadiusSM: 25,
                                paddingBlock: 12,
                                boxShadowSecondary: "0px 3px 8px 0px rgba(0, 0, 0, 0.8)",

                            // Mijenja se s temom
                                colorText: theme.dropdown.colorText,
                                colorPrimary: theme.dropdown.colorText,
                                colorBgElevated: theme.dropdown.colorBgElevated,
                                controlItemBgHover: theme.dropdown.controlItemBgHoverAndActive,
                                controlItemBgActive: theme.dropdown.controlItemBgHoverAndActive,
                                controlItemBgActiveHover: theme.dropdown.controlItemBgActiveHover
                            }
                        }
                    }}
                >
                    <Dropdown
                        menu={{
                            items,
                            selectable,
                            onClick,
                            defaultSelectedKeys,
                        }}
                    >
                        <Typography.Link>
                            <Space>
                                {selectedEnv}
                                <DownOutlined />
                            </Space>
                        </Typography.Link>
                    </Dropdown>
                </ConfigProvider>
            </div>
        </div>
    )
}

export { DropdownRender };