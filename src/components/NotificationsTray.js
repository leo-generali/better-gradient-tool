import React, { Component } from 'react';
import Popup from './Popup';

class NotificationsTray extends Component {
    render() {
        const notifications = this.props.notifications
            .map((notification, i ) => (
                <Popup 
                    notification={notification}
                    key={i}
                    showing={true}
                />)
            );

        return(
            <section className="notifications-tray">{notifications}</section>
        );
    }
}

export default NotificationsTray;