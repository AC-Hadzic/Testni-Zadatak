import React, { useContext, useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { ConfigProvider, Dropdown, Space, Typography } from 'antd';
import { DataForContext } from '../../pages/HomePage/HomePage';
import "./../../assets/CSS/dropdown.scss";

function DropdownComponent() {
    const [selected, setSelected] = useState("");
    const { data, setEnvID } = useContext(DataForContext);

    // Novi Array environmnenta za Dropdown s podacima iz Contexta, dodavanje key zbog potrebe .map funkcije. Provjera postojanja podataka.
    const items = data ?
        data.map(item => ({
            key: item.id.toString(),
            label: item.environment,
        })) :
        [{
            key: "0",
            label: "Loading data..."
        }]

    // useEffect poziva update funkciju i postavlja početnu tablicu na Production Environment
    useEffect(() => {
        data.length > 0 &&
            updateSelected(items[0].key, items[0].label);
            // console.log("useEffect called");
    }, [data])

    // Handle funkcija za onClick koja poziva update funkciju
    const handleSelected = (item) => {
        updateSelected(item.key, items[item.key].label)
        // console.log("handler called");
    }

    // Funckija koja postavlja Environment Key (potrebno za Table) i label (potrebno za prikaz u Dropdown)
    const updateSelected = (key, label) => {
        setSelected("Selected: " + label)
        setEnvID(key);
        // console.log("setter called");
    }

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
                            },
                        },
                    }}
                >
                    <Dropdown
                        menu={{
                            items,
                            selectable: true,
                            onClick: handleSelected
                        }}
                    >
                        <Typography.Link>
                            <Space>
                                {selected}
                                <DownOutlined />
                            </Space>
                        </Typography.Link>
                    </Dropdown>
                </ConfigProvider>
            </div>
        </div>
    )
}

export { DropdownComponent };