import { connect } from "react-redux";
import React, { Fragment } from "react";
import Message from "../Components/Messages/Message";
import NewMessage from "../Components/Messages/newMessage";

function Home({ messages }) {
  return (
    <div className="container justify-contect-center">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm my-4">
          <NewMessage></NewMessage>
        </div>
      </div>
      {messages &&
        messages.map((message, i) => <Message message={message}></Message>)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
});
export default connect(mapStateToProps)(Home);
