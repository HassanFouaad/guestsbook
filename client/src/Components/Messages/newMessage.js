import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Label, Input, FormGroup } from "reactstrap";
import { addMessage } from "../../actions/messagesActions";

const NewMessage = ({ loading, error, addMessage }) => {
  const [values, setValues] = useState({
    subject: "",
    text: "",
  });

  const { subject, text } = values;

  const handleSubmit = (event) => {
    event.preventDefault();
    addMessage(subject, text);
  };

  const handleChange = (name) => (event) => {
    event.preventDefault();
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {loading && <div className="alert">Loading...</div>}
      <FormGroup>
        <Label className="text-muted">Subject</Label>
        <Input
          type="text"
          className="form-control"
          value={subject}
          onChange={handleChange("subject")}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label className="text-muted">Text</Label>
        <Input
          type="textarea"
          className="form-control"
          value={text}
          onChange={handleChange("text")}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Input type="submit"></Input>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  loading: state.messages.loading,
  error: state.messages.error,
});
export default connect(mapStateToProps, { addMessage })(NewMessage);
