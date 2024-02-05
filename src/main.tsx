import { Suspense } from 'react';
import 'rsuite/dist/rsuite.min.css';
import ja from 'date-fns/locale/ja';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { registerLocale } from 'react-datepicker';
import { HelmetProvider } from 'react-helmet-async';
import 'react-datepicker/dist/react-datepicker.css';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Router from 'src/routes/sections';

import 'src/global.css';
import i18n from 'src/i18n/config';
import theme from 'src/theme/theme';
import { store, persistor } from 'src/store';

// Create a client
const queryClient = new QueryClient();
registerLocale('ja', ja);

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <I18nextProvider i18n={i18n}>
              <ChakraProvider theme={theme}>
                <Suspense>
                  <Router />
                </Suspense>
              </ChakraProvider>
            </I18nextProvider>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </PersistGate>
  </StoreProvider>
);

if (import.meta.env.VITE_APP_NODE_ENV !== 'development') {
  console.log = () => {};
}
