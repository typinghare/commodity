import React from 'react';
import commodities, { CommodityMap } from '../../data/commodities';
import { CommodityBlock } from './CommodityBlock';
type CommodityBlockList = {
  [part: string]: CommodityMap
}

export class CommodityTable extends React.Component {
  protected commodityBlockList: CommodityBlockList;

  public constructor(props: any) {
    super(props);

    // sort by commodity code in ascending order
    const commodityNumberList = Object.keys(commodities).sort();

    // divide them into parts
    const commodityBlockList: CommodityBlockList = {};
    for (let number of commodityNumberList) {
      const part = number.slice(0, number.length - 2);
      if (!(part in commodityBlockList)) {
        commodityBlockList[part] = {};
      }
      // @ts-ignore
      commodityBlockList[part][number] = commodities[number];
    }

    this.commodityBlockList = commodityBlockList;
  }

  public render() {
    return (
      <>
        {Object.entries(this.commodityBlockList).map((entry, index) => (
          <CommodityBlock title={entry[0] + 'XX'} commodityList={entry[1]} key={index} />
        ))}
      </>
    );
  }
}