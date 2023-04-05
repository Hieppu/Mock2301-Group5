import React, { useCallback, useEffect, useState } from 'react'
import './Toast.scss'
const Toast = ({ toastlist, position, setList }) => {

    const deleteToast = useCallback(id => {
        const toastListItem = toastlist.filter(e => e.id !== id);
        setList(toastListItem);
    }, [toastlist, setList]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastlist.length) {
                deleteToast(toastlist[0].id);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [toastlist, deleteToast]);

    return (
        <div className={`notification-container ${position}`}>
            {
                toastlist.map((toast, i) => (
                    <div
                        key={i}
                        className={`notification toast ${position}`}
                        style={{ backgroundColor: toast.backgroundColor }}
                    >
                        <button onClick={() => deleteToast(toast.id)}>X</button>
                        <div className="notification-image">
                            <i className={toast.icon}></i>
                        </div>
                        <div>
                            <p className={'notification-title'}>{toast.title}</p>
                            <p className={'notification-description'}>{toast.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    );
}

export default Toast