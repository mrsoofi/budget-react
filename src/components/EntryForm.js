/** @format */

import React from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

const EntryForm = ({
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  return (
    <>
      <Form.Group widths={3}>
        <Form.Input
          icon='tag'
          width={12}
          label='Description'
          placeholder='New shinny thing '
          value={description}
          onChange={(e) => setDescription(e.target.value)}></Form.Input>
        <Form.Input
          label='Value'
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'
          width={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label='isExpense'
          checked={isExpense}
          onClick={() => setIsExpense(!isExpense)}
        />
      </Segment>
    </>
  );
};

export default EntryForm;
