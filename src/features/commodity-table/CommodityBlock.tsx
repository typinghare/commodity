import React from 'react';
import {
  styled,
  Table,
  TableBody, TableCell, tableCellClasses,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { CommodityMap } from '../../data/commodities';
import './CommodityBlock.css';

type CommodityBlockProps = {
  title: string,
  commodityList: CommodityMap
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));


export class CommodityBlock extends React.Component<CommodityBlockProps> {
  public constructor(commodityBlockProps: CommodityBlockProps) {
    super(commodityBlockProps);
  }

  public render() {
    return (
      <>
        <Typography variant='h3' sx={{ color: '#219ebc', margin: '8px 0' }}>
          {this.props.title}
        </Typography>

        <Table className='CommodityBlockTable'>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell sx={{ fontWeight: 'bolder', color: '#fb8500' }}>商品代码</StyledTableCell>
              <StyledTableCell sx={{ fontWeight: 'bolder', color: '#fb8500' }}>商品名称</StyledTableCell>
              <StyledTableCell sx={{ fontWeight: 'bolder', color: '#fb8500' }}>搜索代码</StyledTableCell>
            </StyledTableRow>
          </TableHead>

          <TableBody>
            {Object.entries(this.props.commodityList).map((entry, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell sx={{ fontWeight: 'bolder' }}>{entry[0]}</StyledTableCell>
                <StyledTableCell>{entry[1][0]}</StyledTableCell>
                <StyledTableCell>{entry[1][1]}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>

        <br />
      </>
    );
  }
}