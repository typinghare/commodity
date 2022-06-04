import React from 'react';
import './App.css';
import { CommodityTable } from './features/commodity-table/CommodityTable';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
      <CommodityTable />
    </Container>
  );
}

export default App;
