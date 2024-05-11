import React from 'react';
import { Table, ConfigProvider } from 'antd';
import "../../assets/CSS/table.scss";

function TableRender({ columns, dataSource, onRow }) {
    return (
        <div className='table'>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            rowHoverBg: "rgb(196, 227, 238)",
                            cellPaddingBlock: "14px",
                            cellPaddingInline: "10px",
                            headerBorderRadius: 25
                        }
                    }
                }}
            >
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    onRow={onRow}
                />
            </ConfigProvider>
        </div>
    )
}

export { TableRender };