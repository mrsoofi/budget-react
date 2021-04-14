/** @format */

import './App.css';
import React, { useEffect, useState } from 'react';

import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';
function App() {
  const [entries, setEntries] = useState(initialEntries);

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  /**
   *
   * Use Effect
   */
  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntry = [...entries];
      newEntry[index].description = description;
      newEntry[index].value = value;
      newEntry[index].isExpense = isExpense;
      setEntries(newEntry);
      resetEntry();
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += parseFloat(entry.value));
      }
      return (totalIncome += parseFloat(entry.value));
    });

    setIncomeTotal(totalIncome);
    setExpenseTotal(totalExpense);
    setTotal(totalIncome - totalExpense);
  }, [entries]);
  /**
   *
   * Delete Handler
   */
  const deleteEntry = (id) => {
    const newEntries = entries.filter((entry) => entry.id !== id);

    setEntries(newEntries);
  };
  /**
   * Edit Handler
   */
  const editEntry = (id) => {
    if (id) {
      const entry = entries.find((entry) => entry.id === id);
      setEntryId(entry.id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  /**
   * Create new Entry
   */
  const addEntry = () => {
    const newEntry = {
      id: entries.length + 1,
      description,
      value,
      isExpense,
    };
    setEntries([...entries, newEntry]);
    resetEntry();
  };
  /**
   *
   */
  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(false);
  };

  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance
        total={total}
        size='small'
        label='Your Balance'
        value={total}
      />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />
      <MainHeader type='h3' title='History' />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
      />

      <MainHeader type='h3' title='Add new transaction' />

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

const initialEntries = [
  {
    id: 1,
    description: 'work',
    value: '1000',
    isExpense: false,
  },
  {
    id: 2,
    description: 'water',
    value: '300',
    isExpense: true,
  },
  {
    id: 3,
    description: 'payment',
    value: '250',
    isExpense: true,
  },
];
