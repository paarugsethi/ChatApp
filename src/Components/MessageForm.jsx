import { useState } from 'react'
import './Chat.css'
import { sendMessage, isTyping } from 'react-chat-engine';
import { PictureOutlined, SendOutlined } from '@ant-design/icons';

export const MessageForm = (props) => {
    const [value, setValue] = useState("");
    const {chatId, creds} = props;

    const handleChange = (e) => {
        setValue(e.target.value);
        isTyping(props, chatId);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const text = value.trim();
        setValue("");

        if (text.length > 0) {
            sendMessage(creds, chatId, {text})
        };
        // console.log(value)
        
        // console.log("AFTER", value)
        
    }

    const handleUpload = (e) => {
        sendMessage(creds, chatId, {files: e.target.files, text: ""})
    }

    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input 
                className='message-input'
                placeholder='Send a message'
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label htmlFor='upload-button'>
                <span className='image-button'>
                    <PictureOutlined className='picture-icon'/>
                </span>
            </label>
            <input
                type="file"
                multiple={false}
                id='upload-button'
                style={{display:"none"}}
                onChange={handleUpload}
            />
            <button type="submit" className='send-button'>
                <SendOutlined className='send-icon' />
            </button>
        </form>
        
    )
}