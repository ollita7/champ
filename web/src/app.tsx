import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import store from './store/store';
import { Navigator} from './navigation';

 // Create a client
 const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    },
  },
})

const theme = createTheme({
  palette: {
    primary: {
      main: "#544984"
    },
    secondary: {
      main: "#837ba6"
    }
  }
});

const App = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Navigator />
          </BrowserRouter>
        </Provider>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export { App };