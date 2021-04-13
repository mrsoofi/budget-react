/** @format */

import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
function App() {
  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance size='small' label='Your Balance' value='2,550.53' />

      <DisplayBalances />
      <MainHeader type='h3' title='History' />
      <EntryLine description='income' value='10.00' />
      <EntryLine isExpense description='expense' value='20.00' />
      <EntryLine description='income' value='10.00' />

      <MainHeader type='h3' title='Add new transaction' />
    </Container>
  );
}

export default App;
