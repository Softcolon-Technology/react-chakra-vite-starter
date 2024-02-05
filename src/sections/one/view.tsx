import { useQuery } from '@tanstack/react-query';

import productService from 'src/services/productService';

// ----------------------------------------------------------------------

export default function OneView() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: productService.getProductList,
  });

  // if (isLoading) {
  //   return <CustomizedProgressBars />;
  // }

  return (
    <div>
      <p> Product Page </p>
    </div>
  );
}
