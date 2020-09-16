import React, { useState, useEffect, useCallback, Fragment } from "react";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  NavLink,
} from "reactstrap";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
const Login = ({ history, isAuthenticated, login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [modal, setModal] = useState(false);

  const handleToggle = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };
    login(newUser);
  };
  useEffect(() => {
    // If authenticated, close modal
    if (modal) {
      if (isAuthenticated) {
        handleToggle();
      }
    }
  }, [handleToggle, isAuthenticated, modal]);

  const { email, password } = formData;

  return (
    <Fragment>
      <NavLink
        onClick={handleToggle}
        href="#"
        style={{ color: "var(--mainWhite)" }}
      >
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Registesr</ModalHeader>

        <ModalBody>
          {" "}
          <Form onSubmit={(e) => onSubmit(e)}>
            <FormGroup className="col-sm text-center"></FormGroup>
            <FormGroup className="col-sm">
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              ></Input>
            </FormGroup>
            <FormGroup className="col-sm">
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              ></Input>
            </FormGroup>
            <FormGroup className="col-sm">
              <Button
                id="subbtn"
                style={{ background: "var(--primaryColor)", border: "none" }}
              >
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);
