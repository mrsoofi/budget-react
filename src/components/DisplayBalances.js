/** @format */

import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = ({ color }) => {
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              color='green'
              size='tiny'
              label='Incoming :'
              value='1,045.50'
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance
              color='red'
              size='tiny'
              label='Expenses :'
              value='623.50'
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
export default DisplayBalances;
