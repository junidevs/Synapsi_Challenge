import React from 'react'
//import PropTypes from 'prop-types';
import SideBar from './SideBar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';
export default function Dashboard({id}) {
    const { selectedConversation } = useConversations()
    return (
        <div className="d-flex dashboard_Container" style={{height:'100vh'}}>
            <SideBar  id={id}/>
            {selectedConversation && <OpenConversation />}
        </div>
 
    )
}
//Dashboard.defaultProps={
   // id:'Dummy User',
//}
//
//Dashboard.propTypes = {
//    id: PropTypes.string
//  };