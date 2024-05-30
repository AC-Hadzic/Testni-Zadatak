import React, { useContext } from 'react';
import { Table, ConfigProvider } from 'antd';
import "../../assets/CSS/table.scss";
import { ThemeContext } from '../../context/ThemeContext.jsx';

function TableRender({ columns, dataSource, onRow }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='table'>
            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                        // static
                            cellPaddingBlock: "14px",
                            cellPaddingInline: "10px",
                            headerBorderRadius: 25,
                            headerSplitColor: "none",
                            colorPrimary: "red",

                        // Mijenja se ovisno o temi
                            colorText: theme.table.colorText,
                            bodySortBg: theme.table.bodySortBg,
                            rowHoverBg: theme.table.rowHoverBg,
                            colorBgContainer: theme.table.colorBgContainer,
                            headerBg: theme.table.headerBg,
                            headerSortActiveBg: theme.table.headerSortActiveAndHoverBG,
                            headerSortHoverBg: theme.table.headerSortActiveAndHoverBG,
                            headerColor: theme.table.headerColor,
                        },
                        Pagination: {
                        // static
                            borderRadius: 10,
                            controlHeight: 34,

                        // Mijenja se ovisno o temi
                            colorPrimary: theme.pagination.colorPrimary,
                            colorPrimaryHover: theme.pagination.colorPrimaryHover,
                            itemActiveBg: theme.pagination.itemActiveBg,
                            colorBgTextHover: theme.pagination.colorBgTextHover,
                            colorText: theme.pagination.colorPrimary,
                            colorTextDisabled: theme.pagination.colorPrimary,
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