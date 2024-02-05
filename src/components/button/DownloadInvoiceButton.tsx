import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { globalStyles } from '../../theme/styles';

interface DownloadInvoiceButtonProps {
  handleDownload: any;
}

const DownloadInvoiceButton = ({ handleDownload }: DownloadInvoiceButtonProps) => {
  const { t } = useTranslation();
  return (
    <Button bgColor={globalStyles.colors.mainColor} color="white" mt={3} onClick={handleDownload}>
      {t('sales_mgmt.download_invoice')}
    </Button>
  );
};

export default DownloadInvoiceButton;
