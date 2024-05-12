import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { ConfigProvider, Dropdown, Space, Typography } from 'antd';
import "./../../assets/CSS/dropdown.scss";

function DropdownRender({ menu, selectedEnv }) {
    const { items, selectable, onClick, defaultSelectedKeys } = menu;

    return (
        <div className='dropdown'>
            <div className='center-dropdown'>
                <ConfigProvider
                    theme={{
                        components: {
                            Dropdown: {
                                controlItemBgHover: "rgb(196, 227, 238)",
                                controlItemBgActive: "rgb(196, 227, 238)",
                                borderRadiusLG: 15,
                                borderRadiusSM: 15,
                                paddingBlock: 10
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