import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Section } from 'components/Section/Section';
// import { Loader } from 'components/Loader/Loader';
import { AppWraper } from './SharedLayout.styled'; // Link
// import { Nav } from './SharedLayout.styled';
import { HeaderWrap } from './SharedLayout.styled';
import { AppBar } from 'components/AppBar/AppBar';

// {<Loader size={'75vh'}

export const SharedLayout = () => {
  return (
    <AppWraper>
      <Section tag={'header'}>
        <HeaderWrap>
          <AppBar />
        </HeaderWrap>
      </Section>
      <Section tag={'main'}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Section>
      <Section tag={'footer'}>
        <p>&copy; 2023 | All Rights Reserved</p>
      </Section>
    </AppWraper>
  );
};
