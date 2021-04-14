/** @format */

import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';

const ModalEdit = ({
  isOpen,
  setIsOpen,
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Form unstackable>
          <EntryForm
            description={description}
            setDescription={setDescription}
            value={value}
            setValue={setValue}
            isExpense={isExpense}
            setIsExpense={setIsExpense}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary>
          Change
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
