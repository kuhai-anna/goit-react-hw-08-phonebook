import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';
import { AppWraper } from './SharedLayout.styled';
import { HeaderWrap } from './SharedLayout.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

export const SharedLayout = () => {
  return (
    <AppWraper>
      <Section tag={'header'}>
        <HeaderWrap>
          <AppBar />
        </HeaderWrap>
      </Section>
      <Section tag={'main'}>
        <Suspense fallback={<Loader size={'75vh'} />}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </Section>
      <Section tag={'footer'}>
        <p>&copy; 2023 | All Rights Reserved</p>
      </Section>
    </AppWraper>
  );
};
