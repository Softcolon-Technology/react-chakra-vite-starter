import React from 'react';
import Chart from 'react-apexcharts';
import { Box } from '@chakra-ui/react';

interface ChartProps {
  chartData: any[];
  chartOptions: any;
}

type ChartState = {
  chartData: any[];
  chartOptions: any;
};

class ColumnChart extends React.Component<ChartProps, ChartState> {
  constructor(props: { chartData: any[]; chartOptions: any }) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    const { chartData, chartOptions } = this.props;
    this.setState({
      chartData,
      chartOptions,
    });
  }

  render() {
    const { chartData, chartOptions } = this.state;
    return (
      <Box
        w={{ base: 'auto', md: 'auto', lg: 'full', xl: 'full' }}
        h={{ base: 'auto', md: 'auto', lg: 'full', xl: 'full' }}
        overflow="hidden"
      >
        <Chart options={chartOptions} series={chartData} type="bar" width="100%" height="100%" />
      </Box>
    );
  }
}

export default ColumnChart;
