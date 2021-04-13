/** @format */

import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = () => {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          placeholder='New shinny thing '
          label='Description'
          icon='tag'
          width='12'></Form.Input>
        <Form.Input
          label='Value'
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'
          width='4'></Form.Input>
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
};

export default NewEntryForm;
