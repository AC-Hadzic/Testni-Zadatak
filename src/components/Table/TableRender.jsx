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
                            rowHoverBg: "rgb(213, 227, 231)",

                            cellPaddingBlock: "14px",
                            cellPaddingInline: "10px",

                            headerBg: "#bed5ed",
                            headerBorderRadius: 25,
                            headerSplitColor: "none",

                            headerSortActiveBg: "#85add6",
                            headerSortHoverBg: "#85add6",
                            bodySortBg: "rgb(221, 233, 237)",
                        },
                        Pagination: {
                            colorPrimary: "#46484a",
                            colorPrimaryHover: "rgb(245, 78, 56)",
                   
                            itemActiveBg: "rgb(221, 233, 237)",
                            colorBgTextHover: "#85add6",
                            
                            borderRadius: 10,
                            controlHeight: 34
                        }
                    }
                }}
            >
                <div className='table-wrap'>
                    <Table
                        columns={columns}
                        dataSource={dataSource}
                        onRow={onRow}
                    />
                </div>
            </ConfigProvider>
        </div>
    )
}

export { TableRender };