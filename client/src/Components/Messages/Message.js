import React, { Fragment } from "react";
import "./message.css";
import moment from "moment";
export default function Message({ message }) {
  return (
    <div className="ui comments" key={message._id}>
      <div className="comment">
        <a className="avatar">
            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
        </a>
        <div className="content">
          <a className="author">{`${message.user.firstname} ${message.user.lastname}`}</a>
          <div className="metadata">
            <span className="date">
              {moment(message.createdAt).startOf("hour").fromNow()}
            </span>
          </div>
          <div className="text">
            <p>{message.text}</p>
          </div>
        </div>
        <div className="comments">
          {message.replies.map((reply) => (
            <div className="comment" key={reply._id}>
              <a className="avatar">
                <img src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
              </a>
              <div className="content">
                <a className="author">{`${reply.user.firstname} ${reply.user.lastname}`}</a>
                <div className="metadata">
                  <span className="date">
                    {moment(reply.createdAt).calendar()}
                  </span>
                </div>
                <div className="text">{reply.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
