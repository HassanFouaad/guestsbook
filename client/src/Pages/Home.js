import { connect } from "react-redux";
import React, { Fragment } from "react";
import Message from "../Components/Messages/Message";

function Home({ messages }) {
  return (
    <div className="container">
      {messages &&
        messages.map((message, i) => <Message message={message}></Message>)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
});
export default connect(mapStateToProps)(Home);
