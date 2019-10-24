import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Fade } from 'react-reveal';

import { Form } from '../../../../components/base/Form';
import { Input } from '../../../../components/base/Input';
import { Button } from '../../../../components/base/Button';
import { signIn } from '../../../../redux/ducks/auth.duck';

import styles from './signInForm.styles';

const fields = [{ label: 'Usernаme' }, { label: 'Password', type: 'password' }];

const SignInForm = ({ classes, submit }) => {
  const handleChange = ({ target: { value } }) => {
    console.log(value);
  };

  return (
    <Form
      className={classes.root}
      autoComplete="off"
      onChange={(e) => console.log(e.target)}
    >
      <Fade right big cascade>
        <h1 className={classes.title}>Login</h1>
        <div>
          {fields.map((input) => (
            <Input key={input.label} {...input} onChange={handleChange} />
          ))}
          <Button color="gradient" onClick={() => submit({ name: 'abc' })}>
            Submit form
          </Button>
        </div>
      </Fade>
    </Form>
  );
};

SignInForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  submit: PropTypes.func.isRequired,
};
export default compose(
  connect(
    null,
    { submit: signIn },
  ),
  injectSheet(styles),
)(SignInForm);
