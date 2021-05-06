import React, { useState, useCallback , useRef } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider';
//import SHA256 from 'crypto-js/sha256';
//import hmacSHA512 from 'crypto-js/hmac-sha512';
//import Base64 from 'crypto-js/enc-base64';
var CryptoJS = require("crypto-js");
var aes256 = require('aes256');


export default function OpenConversation() {
  const [text, setText] = useState('');
  const [encrypted,setEncrypted] = useState('');
  const [decrypted,setDecrypted] = useState('');
  const key = `zbo5ob7N8F_51BS/__F9mdt2`;

  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  const { sendMessage, selectedConversation } = useConversations()

const decrypt= (encrypted)=>{
  const translated = aes256.decrypt(key, encrypted);
  sendMessage(
    selectedConversation.recipients.map(r => r.id), 
    
    translated,
  //  console.log(translated),
    document.querySelector("#translated").innerHTML="As you can see the message is the same after encryption and decryption"
  )
  setText('')
}
  
  
  const handleSubmit = (e)=> {
    e.preventDefault()
 
    const encrypt = aes256.encrypt(key, text);
    const decrypt =aes256.decrypt(key, encrypt)
    sendMessage(
      selectedConversation.recipients.map(r => r.id),
      //
      text,
     
    setEncrypted(encrypt),
    setDecrypted(decrypt)
      //encryption
  
    )
    setText('')
  }

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto">
        <div className="d-flex flex-column align-items-start justify-content-end px-3">
          {selectedConversation.messages.map((message, index) => {
            const lastMessage = selectedConversation.messages.length - 1 === index
            return (
              <div
                ref={lastMessage ? setRef : null}
                key={index}
                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : 'align-items-start'}`}
              >
                <div
                  className={`rounded px-2 py-1 ${message.fromMe ? 'bg-primary text-white' : 'border'}`}>
                  {message.text}
                </div>
                <div className={`text-muted small ${message.fromMe ? 'text-right' : ''}`}>
                  {message.fromMe ? 'You' : message.senderName}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <h5 className="info_Chat">In general I think the good approach would be implement this on backend side for example with becrypt as well</h5>
 
      <h5 className="purple_Chat_Info">Key for this case:<h3>{key}</h3></h5>
      
      <h3 className="purple_Chat_Info">{encrypted ? `Result of encryption:  ${encrypted}` :'Type something  and see how it looks like after encryption'}</h3>
          
            <h3 className="green_Chat_Info">{encrypted ? `Now lets try copy and paste these string and click on Decrept button` : null}</h3>
          

      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={e => setText(e.target.value)}
              style={{ height: '75px', resize: 'none' }}
            />
            <InputGroup.Append>
              <Button type="submit">Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
  
      <Button onClick={()=>decrypt(encrypted)} style={{ width: '350px',marginLeft:'auto',marginRight:'auto'}}>Decrept via AES</Button>
      <div id="translated" syle={{width:'100vw' ,height:'20vh',backgroundColor:'red'}}></div>
    </div>
  )
}
