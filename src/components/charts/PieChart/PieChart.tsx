import React, { useMemo, useRef } from 'react';
import { Card } from '@ff/ui-kit';

import diagramsStore from '../../../stores/diagrams';

const getCoordinatesForPercent = (percent: number) => {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
};

const PieChart: React.FC = () => {
  const { chartData } = diagramsStore;
  const svgRef = useRef<SVGSVGElement>(null);
  const chartValueSum = useMemo(() => chartData.reduce((sum, { value }) => sum + value, 0), [chartData]);
  let cumulativePercent = 0;

  const getDataPath = (value: number): string => {
    const [startX, startY] = getCoordinatesForPercent(cumulativePercent);

    const valueInPercent = value / chartValueSum;

    cumulativePercent += valueInPercent;

    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

    const largeArcFlag = valueInPercent > 0.5 ? 1 : 0;

    return [
      `M ${startX} ${startY}`,
      `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      'L 0 0',
    ].join(' ');
  };

  return (
    <Card title="PieChart Example" showTitleBorder>
      <svg
        ref={svgRef}
        width="100%"
        height="400"
        aria-labelledby="barchart"
        role="img"
        viewBox="-1 -1 2 2"
      >
        {chartData.map((data) => (
          <path
            key={data.color}
            d={getDataPath(data.value)}
            fill={data.color}
            strokeWidth="1"
          />
        ))}
      </svg>
    </Card>
  );
};

export default PieChart;
