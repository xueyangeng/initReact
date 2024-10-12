import { App, ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './app.less';
import RenderRouter from '@/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={{
        token: {
          colorPrimary: "#9bc3e5",
          colorInfo: "#9bc3e5",
          colorTextBase: "#333333",
          borderRadius: 10,
          fontSizeHeading1: 28,
          fontSizeHeading2: 24,
          lineHeight: 2
        }
      }}>
        <RenderRouter />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
