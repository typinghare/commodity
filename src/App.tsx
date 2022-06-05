import React from 'react';
import './App.css';
import { CommodityTable } from './features/commodity-table/CommodityTable';
import { Container } from '@mui/material';
import { SearchBox } from './features/SearchBox';

function App() {
  return (
    <Container>
      <br />
      <SearchBox></SearchBox>
      <CommodityTable />
    </Container>
  );
}

export default App;
