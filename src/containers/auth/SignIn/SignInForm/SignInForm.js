import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { compose } from 'redux';
import { Fade } from 'react-reveal';
import { connect } from 'react-redux';

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
    <Form className={classes.root} autoComplete="off">
      <Fade bottom cascade>
        <h1 className={classes.title}>Login</h1>
        <div>
          {fields.map((input) => (
            <Input {...input} key={input.label} onChange={handleChange} />
          ))}
          <Button
            className={classes.button}
            onClick={() => submit({ name: 'abc' })}
          >
            Submit
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
