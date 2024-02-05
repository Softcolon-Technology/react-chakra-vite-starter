/* eslint-disable consistent-return */
import * as XLSX from 'xlsx';
import * as FileServe from 'file-saver';
import { useTranslation } from 'react-i18next';
import { DownloadIcon } from '@chakra-ui/icons';
import { Button, useToast } from '@chakra-ui/react';

import { globalStyles } from '../../theme/styles';

interface ExportBtnProps {
  fileName?: string;
  getExcelData?: any;
}

const ExportExcel = ({ fileName, getExcelData }: ExportBtnProps) => {
  const { t } = useTranslation();
  const toast = useToast();
  const today = new Date();
  const date = new Date(today.getFullYear(), today.getMonth(), 1);
  const formatedDate = '12';
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8';
  const fileExtension = '.xlsx';

  const exportToExcel = async () => {
    const excelData = await getExcelData();

    if (excelData.length === 0) {
      return toast({
        title: 'no data found',
        status: 'error',
        variant: 'solid',
        duration: 2000,
        position: 'top-right',
        isClosable: true,
      });
    }
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileServe.saveAs(data, `${fileName}-${formatedDate}${fileExtension}`);
  };

  return (
    <Button
      leftIcon={<DownloadIcon />}
      bgColor={globalStyles.colors.mainColor}
      color="white"
      size="sm"
      rounded="md"
      w="30"
      _hover={{ fontWeight: '300', opacity: 0.8 }}
      onClick={() => exportToExcel()}
    >
      {t('common.batch_download')}
    </Button>
  );
};

export default ExportExcel;
