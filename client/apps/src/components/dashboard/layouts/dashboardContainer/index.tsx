import React, { LegacyRef, useContext, useEffect, useRef } from 'react'
import Navbar from '../navbar/index'
import SideBar from '../sidebar/index'
import { DashboardContainer, OutletContainer } from './DashboardContainer'
import { Outlet } from 'react-router-dom'
import Section from '../section'
import { ModalContext } from '../../../../contexts/ModelContext'
import ItemForm from '../../../commons/forms/ItemForm'

type ModalState = {
    openModal: boolean,
    setOpenModal : null | React.Dispatch<React.SetStateAction<boolean>>
}

interface ModalRef extends Event  {
    target: Node
}
const index = () => {
    // const {openModal, setOpenModal}:null | ModalState= useContext(ModalContext)
    const openModal: boolean = useContext(ModalContext)!.openModal
    const setOpenModal: null | React.Dispatch<React.SetStateAction<boolean>> = useContext(ModalContext)!.setOpenModal
    const modalRef = useRef<HTMLDivElement | null>(null)
   
    useEffect(()=>{
        const checkIfClickedOutside = (e: any) => {
            if ( modalRef.current && !modalRef.current.contains(e.target) && e.target.id !== "primary-button") {
              setOpenModal!(false);
              console.log('modal',openModal)
            }
          };
          document.addEventListener("click", checkIfClickedOutside);
    }, [openModal])

    return (
        <DashboardContainer>
            {/* modal */}
            <div  style={{position: "absolute", width:"100%", height: "100%", background: 'rgba(220,220,220, 0.5)', justifyContent:'center', alignItems:'center', display: openModal? 'flex': 'none'}}>
                <div ref = {modalRef}>
                    <ItemForm/>
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