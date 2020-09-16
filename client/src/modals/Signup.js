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
import { register } from "../actions/authActions";
import { toastr } from "react-redux-toastr";
const SignUp = ({ history, isAuthenticated, register }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });
  const [modal, setModal] = useState(false);

  const handleToggle = useCallback(() => {
    // Clear errors
    clearErrors();
    setModal(!modal);
  }, [modal]);

  const onChange = (e) => {
    clearErrors();
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toastr.error("Passwords Doesn't Match");
    } else {
      const newUser = {
        firstname,
        lastname,
        email,
        password,
      };
      register(newUser);
    }
  };
  useEffect(() => {
    // If authenticated, close modal
    if (modal) {
      if (isAuthenticated) {
        handleToggle();
      }
    }
  }, [error, handleToggle, isAuthenticated, modal]);

  const { firstname, lastname, email, password, password2 } = formData;
  return (
    <Fragment>
      <NavLink
        onClick={handleToggle}
        href="#"
        style={{ color: "var(--mainWhite)" }}
      >
        Register
      </NavLink>
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Registesr</ModalHeader>

        <ModalBody>
          <Form onSubmit={(e) => onSubmit(e)}>
            <FormGroup className="col-sm">
              <Input
                type="text"
                placeholder="First Name"
                name="firstname"
                value={firstname}
                onChange={(e) => onChange(e)}
              ></Input>
            </FormGroup>
            <FormGroup className="col-sm">
              <Input
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={lastname}
                onChange={(e) => onChange(e)}
              ></Input>
            </FormGroup>

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
              <Input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={(e) => onChange(e)}
              ></Input>
            </FormGroup>
            <FormGroup className="col-sm">
              <Button
                id="subbtn"
                style={{ background: "var(--primaryColor)", border: "none" }}
              >
                Join
              </Button>
            </FormGroup>
            <ToastsContainer store={ToastsStore}></ToastsContainer>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register })(SignUp);
