import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import DataTable from 'react-data-table-component';

import { customStyles } from './style';
import MainLoader from '../loader/MainLoader';

interface IProps {
  column: any[];
  data: any[];
  progressPending?: boolean;
  onSelectedRowsChange?: any;
  isSelector?: boolean;
  handleEdit?: any;
  conditionalRowStyles?: any;
}

const DataTableComponent = ({
  column,
  data,
  progressPending,
  onSelectedRowsChange,
  isSelector,
  handleEdit,
  conditionalRowStyles,
}: IProps) => {
  const { t } = useTranslation();

  const paginationComponentOptions = {
    rowsPerPageText: t('rows_per_page'),
  };

  return (
    <DataTable
      conditionalRowStyles={conditionalRowStyles}
      columns={column}
      data={data}
      pagination
      paginationPerPage={10}
      paginationRowsPerPageOptions={[5, 10, 50, 100, 200, 300, 500]}
      persistTableHead
      responsive
      selectableRows={isSelector || false}
      dense
      onRowClicked={(row) => {
        if (handleEdit) handleEdit(row);
      }}
      style={{ cursor: 'pointer' }}
      onSelectedRowsChange={onSelectedRowsChange}
      progressComponent={<MainLoader />}
      progressPending={progressPending}
      selectableRowsHighlight
      highlightOnHover
      paginationComponentOptions={paginationComponentOptions}
      noDataComponent={<Text my={4}>{t('there_are_no_records_to_display')}</Text>}
      customStyles={customStyles}
    />
  );
};
export default DataTableComponent;
