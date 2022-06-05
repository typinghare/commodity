import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import commodities from '../data/commodities';

type SearchBoxProp = {}

export type CommodityOptionType = {
  code: string,
  name: string;
  acronym: string;
}

export class SearchBox extends React.Component<SearchBoxProp> {
  public commodityList: CommodityOptionType[] = [];

  public acronymHashtable: { [code: string]: number } = {};

  public constructor(searchBoxProp: SearchBoxProp) {
    super(searchBoxProp);

    // initialize commodity list
    let i = 0;
    for (let code in commodities) {
      this.commodityList.push({
        code: code,
        name: commodities[code][0],
        acronym: commodities[code][1]
      });
      this.acronymHashtable[commodities[code][1]] = i++;
    }
  }

  public render() {
    return (
      // @ts-ignore
      <Autocomplete
        disablePortal
        options={this.commodityList}
        renderInput={(params) => <TextField {...params} label='请输入商品的搜索代码' />}
        getOptionLabel={(option: CommodityOptionType) => {
          return `${option.name} - ${option.code} - ${option.acronym}`;
        }}
        filterOptions={(options: CommodityOptionType[], state) => {
          const filtered: CommodityOptionType[] = [];
          const key = state.inputValue.toUpperCase();

          for (const commodity of this.commodityList) {
            const acronym = commodity.acronym;
            if (acronym.includes(key)) {
              if (acronym === key) {
                // exact match
                filtered.unshift(commodity);
              } else {
                filtered.push(commodity);
              }
            }
          }

          return filtered;
        }}
      >

      </Autocomplete>
    );
  }
}