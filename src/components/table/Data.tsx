import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import DataTable from 'react-data-table-component';

import MainLoader from '../loader/MainLoader';

interface IProps {
  column: any[];
  data: any[];
  progressPending?: boolean;
  onSelectedRowsChange?: any;
  isSelector?: boolean;
}

const Data = ({ column, data, progressPending, onSelectedRowsChange, isSelector }: IProps) => {
  const { t } = useTranslation();

  const paginationComponentOptions = {
    rowsPerPageText: t('rows_per_page'),
  };
  return (
    <DataTable
      columns={column}
      data={data}
      // pagination
      // paginationPerPage={50}
      // paginationRowsPerPageOptions={[5, 50, 100, 200, 300, 500]}
      persistTableHead
      responsive
      selectableRows={isSelector || false}
      dense
      onSelectedRowsChange={onSelectedRowsChange}
      progressComponent={<MainLoader />}
      progressPending={progressPending}
      selectableRowsHighlight
      highlightOnHover
      paginationComponentOptions={paginationComponentOptions}
      noDataComponent={<Text my={4}>{t('there_are_no_records_to_display')}</Text>}
    />
  );
};
export default Data;
