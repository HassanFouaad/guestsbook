import { connect } from "react-redux";
import React, { Fragment } from "react";
import Message from "../Components/Messages/Message";

function Home({ messages }) {
  return (
    <Fragment>
      {messages &&
        messages.map((message, i) => <Message message={message}></Message>)}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
});
export default connect(mapStateToProps)(Home);
