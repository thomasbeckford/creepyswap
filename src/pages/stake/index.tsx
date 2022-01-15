import React from 'react';

import Card from '../../components/Card';
import { Meta } from '../../layout/Meta';
import { Wrapper } from '../../styles/styled';
import { Main } from '../../templates/Main';

function Stake() {
  return (
    <Main meta={<Meta title="Stake" description="" />}>
      <Card>
        <Wrapper>
          <div>
            <p style={{ fontSize: 30 }}>Stake your CPY tokens to earn more!</p>
          </div>
        </Wrapper>
      </Card>
    </Main>
  );
}

export default Stake;
