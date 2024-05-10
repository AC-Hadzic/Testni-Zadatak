import { ModalComponent } from "./ModalComponent"

function ModalDetails ({isModalOpen, setIsModalOpen, activeRecord}) {
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <ModalComponent
            isModalOpen={isModalOpen}
            handleCancel={handleCancel} 
            handleOk={handleOk}
            activeRecord={activeRecord}
            text="Here you can view details about selected server. For further details click on the ID from the table content."
        />
    )
}

export { ModalDetails }