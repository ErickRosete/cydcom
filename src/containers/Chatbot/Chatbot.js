import React, { Component } from 'react';
import "./Chatbot.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Chatbot extends Component {
    state = {
        chat: false
    };

    toggleChat = () => {
        this.setState({ chat: !this.state.chat })
    }

    render() {
        return (
            <div className="chatbot">
                <button className="chatbot-button" onClick={this.toggleChat}>
                    {this.state.chat ?
                        <span> Cerrar
                            {/* <FontAwesomeIcon icon="window-close" />  */}
                        </span>
                        : <span>Chat</span>}
                </button>
                {this.state.chat && <div className="chatbot-window">
                    <iframe
                        className="chatbot-frame"
                        title="chatbot"
                        allow="microphone;"
                        width="350"
                        height="430"
                        src="https://console.dialogflow.com/api-client/demo/embedded/b6e43c79-c409-42a3-8daf-75a3f5143796">
                    </iframe>
                </div>}
            </div>
        )
    }
}

export default Chatbot
