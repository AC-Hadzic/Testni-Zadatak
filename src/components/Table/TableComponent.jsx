import React, { useContext, useMemo, useState } from 'react';
import "../../assets/CSS/table.scss";
import { renderIDLink, statusIndicator, tableDataParser } from '../../utils/Utils';
import { ModalComponent } from '../Modal/ModalComponent';
import { TableRender } from './TableRender';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import { DataContext } from '../../context/DataContext';

function TableComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeRecord, setActiveRecord] = useState(null);
    const { data, envID } = useContext(DataContext);

    // Funkcija će data provesti kroz .map i vratiti iskoristivi array za Table
    const parsedData = useMemo(() => tableDataParser(data[envID]?.environments, envID), [data, envID]);

    // Kolumne tablice
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            sorter: { compare: (a, b) => a.id - b.id },
            render: renderIDLink,
            align: "center"
        },
        {
            title: 'Application ID',
            dataIndex: 'application_id',
            hidden: useScreenWidth(1080)
        },
        {
            title: 'Server Name',
            dataIndex: 'name',
        },
        {
            title: 'Date Created',
            dataIndex: 'date_created',
            hidden: useScreenWidth(720)
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (text, record) => <>{statusIndicator(record?.status)}</>,
            align: "center"
        }
    ];

    // Otvara modal i setta data iz odabranog retka
    const showModal = (record) => {
        setActiveRecord(record);
        setIsModalOpen(true);
    };

    return (
        <>
            <TableRender
                columns={columns}
                dataSource={parsedData}
                // rowKey={(record) => record.id}
                onRow={(record) => {
                    return {
                        onDoubleClick: () => {
                            showModal(record);
                        }
                    };
                }}
            />

            <ModalComponent
                activeRecord={activeRecord}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                title="Server details"
                text="Here you can view details about selected server. For further details click on the ID from the table content."
            />
        </>
    )
}

export { TableComponent };