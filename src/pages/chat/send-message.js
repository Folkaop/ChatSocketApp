import styles from './styles.module.css';
import React, { useState } from 'react';

const SendMessage = ({ socket, username, room }) => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (message !== '') {
            const __createdtime__ = Date.now();
            socket.emit('send_message', { username, room, message, __createdtime__ });
            setMessage('');
        }
    };

    return (
        <div className={styles.sendMessageContainer}>
            <input
                className={styles.messageInput}
                placeholder='Введите ваше сообщение тут'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
            <button className='btn btn-primary' onClick={sendMessage}>
               Отправить
            </button>
        </div>
    );
};

export default SendMessage;