import { Modal, ConfigProvider } from "antd";
import "../../assets/CSS/modal.scss";
import { dateParser, statusIndicator } from "../../utils/Utils";
import { DetailsComponent } from "../../layout/LayoutComponents/DetailsComponent";
import { useEffect } from "react";

function ModalComponent({ activeRecord, isModalOpen, setIsModalOpen, title, text }) {
    const BlurWrapper = document.getElementById("page-wrap");

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

    return (
        <ConfigProvider
            theme={{
                components: {
                    Modal: {
                        borderRadiusLG: 25,
                        borderRadiusSM: 25,
                        colorBgTextActive: "rgb(255, 170, 159)",
                        colorBgTextHover: "rgb(245, 78, 56)",
                        colorIcon: "rgb(245, 78, 56)",
                        colorIconHover: "white",
                        titleFontSize: 20,
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
                            <DetailsComponent title="Server name:" data={activeRecord?.name} />
                            <DetailsComponent title="Server created at:" data={activeRecord?.date_created} />
                            <DetailsComponent title="Server managed by:" data={activeRecord?.admin} />
                            <DetailsComponent title="Server description:" data={activeRecord?.description} />
                        </div>

                        <div className="separator vertical" />

                        <div className="margin-add">
                            <DetailsComponent title="Server ID:" data={activeRecord?.id} />
                            <DetailsComponent title="Server App ID:" data={activeRecord?.application_id} />
                            <DetailsComponent title="Server IP Adress:" data={activeRecord?.ip} />
                            <DetailsComponent title="Server status:" data={statusIndicator(activeRecord?.status, "small")} />
                        </div>
                    </div>
                </div>
            </Modal>
        </ConfigProvider>
    )
}

export { ModalComponent };