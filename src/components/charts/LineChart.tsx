import React from 'react';
import { Box } from '@chakra-ui/react';
import ReactApexChart from 'react-apexcharts';

interface ChartProps {
  chartData: any[];
  chartOptions: any;
}
type ChartState = {
  chartData: any[];
  chartOptions: any;
};

class LineChart extends React.Component<ChartProps, ChartState> {
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
        w={{ base: 'auto', md: 'full', lg: '90%', xl: 'full' }}
        h={{ base: 'auto', md: 'full', lg: 'full', xl: 'full' }}
        overflow="hidden"
      >
        <ReactApexChart
          options={chartOptions}
          series={chartData}
          type="line"
          width="100%"
          height="100%"
        />
      </Box>
    );
  }
}

export default LineChart;
