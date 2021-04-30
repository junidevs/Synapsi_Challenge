import React,{useState} from 'react'
import {Tab,Nav,Button,Modal} from 'react-bootstrap';
import Conversations from './Conversations';
import Contacts from './Contacts';
import NewConversationModal  from './NewConversationModal'
import NewContactModal from './NewContactModal' 
export default function SideBar({id}) {

    const CONVERSATIONS_KEY = 'conversations';
    const CONTACTS_KEY = 'contacts';

    const [activeKey,setActiveKey] = useState(CONVERSATIONS_KEY);
    const [modalOpen,setModalOpen] = useState(false);
    const openKey = activeKey === CONVERSATIONS_KEY;

    const closeModal = ()=>{
        setModalOpen(false)
    }

    return (
        <div style={{width: '250px'}} className="d-flex flex-column">
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
            <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey={CONVERSATIONS_KEY}>
                         Conversations
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey={CONTACTS_KEY}>
                         Contacts
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className="border-right overflow-auto flex-grow-1">
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                    <Conversations />
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY}>
                    <Contacts />
                </Tab.Pane>
            </Tab.Content>
            <div className="p-2 border-top border-right small">
            Your id : {id}
            </div>
      <Button onClick={()=>setModalOpen(true)} className="rounded-0">
          New {openKey ? 'conversation' : "contact"}
    </Button>
        </Tab.Container>

        <Modal show={modalOpen} onHide={closeModal}>
            {openKey ? <NewConversationModal closeModal={closeModal} /> : <NewContactModal closeModal={closeModal} /> }
        </Modal>
        </div>
    )
}
