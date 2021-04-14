/** @format */

import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

function EntryLine({
  id,
  description,
  value,
  isExpense = false,
  deleteEntry,
  editEntry,
}) {
  return (
    <>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>
              {description}
            </Grid.Column>
            <Grid.Column width={2}>${value}</Grid.Column>
            <Grid.Column width={4}>
              <Icon name='edit' bordered onClick={() => editEntry(id)} />
              <Icon name='trash' bordered onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default EntryLine;
