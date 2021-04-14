/** @format */

import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = ({ incomeTotal, expenseTotal }) => {
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              color='green'
              size='tiny'
              label='Incoming :'
              value={incomeTotal}
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              color='red'
              size='tiny'
              label='Expenses :'
              value={expenseTotal}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
export default DisplayBalances;
