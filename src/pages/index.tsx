import { Hero } from '@/components/Hero';
import { Meta } from '@/layout/Meta';
import type { NextPage } from 'next';
import { Main } from '@/templates';
import { AppConfig } from '@/config';
import { Text } from '@chakra-ui/react';
import Card from '@/components/Card';

const Home: NextPage = () => {
  const heading = (
    <>
      {AppConfig.site_name} <br />
      <Text as={'span'} color={'blue.800'}>
        {AppConfig.network}
      </Text>
    </>
  );

  return (
    <Main
      meta={<Meta title="CreepySwap" description="CreepySwap for Fantom" />}
    >
      <Card>
        <Hero heading={heading}>
          <Text color={'gray.500'}>{AppConfig.description}</Text>
        </Hero>
      </Card>
    </Main>
  );
};

export default Home;
