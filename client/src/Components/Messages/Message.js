import React, { Fragment } from "react";
import "./message.css";
export default function Message({message}) {
  return (
    <Fragment>
      <div class="ui comments">
        <div class="comment">
          <a class="avatar"></a>
          <div class="content">
            <a class="author">Elliot Fu</a>
            <div class="metadata">
              <span class="date">{message.createdAt}</span>
            </div>
            <div class="text">
              <p>This has been very useful for my research. Thanks as well!</p>
            </div>
          </div>
          <div class="comments">
            <div class="comment">
              <a class="avatar"></a>
              <div class="content">
                <a class="author">Jenny Hess</a>
                <div class="metadata">
                  <span class="date">Just now</span>
                </div>
                <div class="text">Elliot you are always so right :)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
