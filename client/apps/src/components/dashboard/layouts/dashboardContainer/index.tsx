import React, { LegacyRef, MutableRefObject, useContext, useEffect, useRef } from 'react'
import Navbar from '../navbar/index'
import SideBar from '../sidebar/index'
import { DashboardContainer, OutletContainer } from './DashboardContainer'
import { Outlet } from 'react-router-dom'
import Section from '../section'
import { ModalContext } from '../../../../contexts/ModalContext'
import ItemForm from '../../../commons/forms/ItemForm'

type ModalState = {
    openModal: boolean,
    setOpenModal: null | React.Dispatch<React.SetStateAction<boolean>>
}

interface ModalRef extends Event {
    target: Node
}
const index = () => {
    const modalRef: MutableRefObject<null | HTMLDivElement> = useContext(ModalContext)?.modalRef!
    // const {openModal, setOpenModal}:null | ModalState= useContext(ModalContext)
    const openModal: boolean = useContext(ModalContext)!.openModal
    const setOpenModal: null | React.Dispatch<React.SetStateAction<boolean>> = useContext(ModalContext)!.setOpenModal
   /*  */return (
        <DashboardContainer>
            {/* modal */}
            <div style={{zIndex:1500, position: "absolute", width: "100%", height: "100vh", overflow:'hidden', background: 'rgba(220,220,220, 0.5)', justifyContent: 'center', alignItems: 'center',  display: openModal ? 'flex' : 'none' }}>
                <div ref={modalRef}>
                    <ItemForm />
                </div>
            </div>
            <Navbar />
            <SideBar />
            <OutletContainer>
                <Outlet />
            </OutletContainer>
        </DashboardContainer>
    )

}

export default index