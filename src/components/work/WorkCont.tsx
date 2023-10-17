import React, {useState} from 'react';
import Modal from "react-modal";
import {WorkContProps} from "../../data/pl/forntDataPl";
import {IoCloseOutline} from 'react-icons/io5';
import WorkModal from "./WorkModal";

Modal.setAppElement('#root');

const modalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: '30',
    }
};

const WorkCont = ({data}: { data: WorkContProps }) => {
    const {img, title, project} = data;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <div
                onClick={openModal}
                className='group relative max-h-80 max-w-[600px]  overflow-hidden border-2 border-white/50 rounded-2xl cursor-pointer'>
                <div className='group-hover:bg-black/80 w-full h-full absolute transition-all duration-300 z-[1]'/>
                <img className='group-hover:scale-125 transition-all duration-500' src={img} alt={title}/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-[1]'>
                    <span className='text-gradient'>{project}</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-[1]'>
                    <span className='text-3xl text-white'>{title}</span>
                </div>

            </div>

            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    style={modalStyles}
                    onRequestClose={closeModal}
                    contentLabel='Work-Competitions'
                    className='bg-white w-full h-full lg:max-w-[900px] lg:max-h-[900px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%]
                    lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none bg-modal bg-cover bg-no-repeat overflow-hidden lg:p-12 p-4'
                >
                    <div
                        onClick={closeModal}
                        className='absolute right-2 top-2 hover:scale-110 duration-200 cursor-pointer text-white'>
                        <IoCloseOutline className='text-4xl' />
                    </div>
                        <WorkModal data={data.description}/>
                </Modal>
            )}
        </div>
    );
}

export default WorkCont;
