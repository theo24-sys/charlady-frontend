// src/components/NotificationHandler.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('ws://localhost:8000');

const NotificationHandler = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        socket.on('message', (data) => {
            setNotifications((prev) => [...prev, data.message]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationHandler;