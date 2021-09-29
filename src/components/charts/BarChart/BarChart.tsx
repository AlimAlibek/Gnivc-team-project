import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { Card } from '@ff/ui-kit';

import diagramsStore from '../../../stores/diagrams';
import useSvgDimension from '../../../utils/useSvgDimension';

const BAR_WIDTH = 60;

const BarChart: React.FC = observer(() => {
  const { chartData } = diagramsStore;
  const svgRef = useRef<SVGSVGElement>(null);
  const { width, height } = useSvgDimension(svgRef);

  const getBarXPos = (barIndex: number) => {
    const colWidth = width / chartData.length;

    return barIndex * colWidth + 1.5 * BAR_WIDTH;
  };

  const getBarHeight = (barValue: number) => {
    const step = height / 100;

    return barValue * step;
  };

  return (
    <Card title="BarChart Example" showTitleBorder>
      <svg
        ref={svgRef}
        width="100%"
        height="400"
        aria-labelledby="barchart"
        role="img"
      >
        <g strokeWidth={1} stroke="#ccc" strokeDasharray={0}>
          <line x1="60" x2="60" y1="0" y2="400" />
          <line x1="60" x2="100%" y1="400" y2="400" />
        </g>
        <g textAnchor="end">
          <text x="50" y="15">100</text>
          <text x="50" y="100">75</text>
          <text x="50" y="200">50</text>
          <text x="50" y="300">25</text>
          <text x="50" y="400">0</text>
        </g>

        {chartData.map((data, i) => (
          <g key={`bar-${data.value}`}>
            <rect
              width={BAR_WIDTH}
              height={getBarHeight(data.value)}
              x={getBarXPos(i)}
              y={height - getBarHeight(data.value)}
              fill={data.color}
            />
            <text x={getBarXPos(i)} y="20">{data.value}</text>
          </g>
        ))}
      </svg>
    </Card>
  );
});

export default BarChart;
