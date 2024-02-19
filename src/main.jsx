import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./app.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import Aos from "aos";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
Aos.init({
  once: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing>
      <Toaster position="top-right" reverseOrder={false} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
