import { Modal, ConfigProvider } from "antd";
import "../../assets/CSS/modal.scss";
import { generateDetails, statusIndicator } from "../../utils/Utils";
import { DetailsComponent } from "../../layout/LayoutComponents/DetailsComponent";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ModalComponent({ activeRecord, isModalOpen, setIsModalOpen, title, text }) {
    const BlurWrapper = document.getElementById("page-wrap");
    const { theme } = useContext(ThemeContext);

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            BlurWrapper?.classList.add('blur-background');
        }
        else {
            BlurWrapper?.classList.remove("blur-background");
        }
    }, [isModalOpen])

    const dataModalLeft = [
        {title: "Server name:", data: activeRecord?.name},
        {title: "Server created at:", data: activeRecord?.date_created},
        {title: "Server managed by:", data: activeRecord?.admin},
        {title: "Server description:", data: activeRecord?.description}
    ];

    const dataModalRight = [
        {title: "Server ID:", data: activeRecord?.id},
        {title: "Server App ID:", data: activeRecord?.application_id},
        {title: "Server IP Adress", data: activeRecord?.ip},
        {title: "Server status", data: statusIndicator(activeRecord?.status, "small")}
    ];

    return (
        <ConfigProvider
            theme={{
                components: {
                    Modal: {
                    // static
                        borderRadiusLG: 25,
                        borderRadiusSM: 25,
                        titleFontSize: 20,

                    // promjena ovisno o temi
                        headerBg: theme.modal.contentBg,
                        contentBg: theme.modal.contentBg,
                        titleColor: theme.modal.titleColor,
                        colorText: theme.modal.titleColor,
                        colorBgTextActive: theme.modal.colorBgTextActive,
                        colorBgTextHover: theme.modal.colorIconAndHover,
                        colorIcon: theme.modal.colorIconAndHover,
                        colorIconHover: theme.modal.colorIconHover
                    }
                }
            }}
        >
            <Modal
                title= {<><i className="bi bi-server"></i> {title}</>}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <div className='modal'>
                    <div className="text-container">
                        <p> {text} </p> 
                    </div>

                    <div className="separator horizontal" />

                    <div className="data-container">
                        <div>
                           {generateDetails(dataModalLeft)}
                        </div>

                        <div className="separator vertical" />

                        <div className="margin-add">
                            {generateDetails(dataModalRight)}
                        </div>
                    </div>
                </div>
            </Modal>
        </ConfigProvider>
    )
}

export { ModalComponent };