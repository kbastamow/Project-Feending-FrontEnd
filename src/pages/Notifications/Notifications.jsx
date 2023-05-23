import React, { useEffect, useState } from 'react'
import "./Notifications.scss";
import BtnDate from '../../components/Buttons/BtnDate';
import BtnTime from '../../components/Buttons/BtnTime';
import AssCategory from '../../components/Buttons/AssistantsCategory';
import SwitchButton from '../../components/Buttons/Swichbutton';
import BtnSendNow from '../../components/Buttons/BtnSendNow';
import ProgramNotification from '../../components/Buttons/ProgramNotification';



const Notifications = () => {
    const [notification, setNotification] = useState('');
    const maxLength = 700;

    const handleNotificationChange = (event) => {
        const { value } = event.target;
        if (value.length <= maxLength) {
            setNotification(value);
        }
    };
    return (
        <>
            <div className="notification-main-container">

                <div className='notification-content'>
                    <h2 className='notification-title'>Enviar notificaciones</h2>




                    <div className='new-notification'>
                        <p className='new-notification-text'>Nueva notificación:</p>
                        <textarea
                            className='input-new-notification'
                            placeholder='Añadir notificación'
                            value={notification}
                            onChange={handleNotificationChange}
                            maxLength={maxLength}
                        ></textarea>
                        <span className="character-count">{notification.length}/{maxLength}</span>
                    </div>





                    <div className='select-options-notifications'>
                        <div className='div-swichButton'>
                            <p className='text-buttons-nots'>Notificación recurrente</p>
                            <SwitchButton />
                        </div>
                        <div className='filter-assistants-buttons'>
                            <p className='text-buttons-nots'>Filtrar receptores</p>
                            <AssCategory />
                            <BtnDate />
                            <BtnTime />
                        </div>
                    </div>

                    <div className='send-notifications-buttons'>
                        <BtnSendNow />
                        <ProgramNotification/>



                    </div>


                    <div className='programmed-notifications'>
                        <p className='new-notification-text'>Notificaciones programadas:</p>
                        <div className='all-program-nots'>



                        </div>
                    </div>













                </div>

            </div>
        </>
    );
}

export default Notifications;
