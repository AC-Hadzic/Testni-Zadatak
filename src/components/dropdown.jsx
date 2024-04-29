import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { useState } from 'react';

function DropdownComponent ({keyToTable, dataToDropdown}) {
    const [selected, setSelected] = useState("Select environment")

    // Novi Array environmnenta za Dropdown s podacima dobivenih iz propsa, dodavanje key varijable zbog potrebe .map funkcije. Provjera postojanja podataka.
    const items = dataToDropdown ?
        dataToDropdown.map( item => ({
            key: item.id,
            label: item.environment,
        })) :
        [{
            key: 0,
            label: "Loading data..."
        }]

    // Odabran environment je ispisan na vrhu Dropdowna te se njegov key šalje natrag u parent, koji će ga proslijediti tablici
    const selectHandler = (item) => {
        setSelected("Selected: " + items[item.key].label)
        keyToTable(item.key);
    }

    return (
        <Dropdown
            menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['3'],
            onClick: selectHandler
            }}
        >
            
            <Typography.Link>
                <Space>
                    {selected}
                    <DownOutlined />
                </Space>
            </Typography.Link>
        </Dropdown>
    )
}
  
export default DropdownComponent;