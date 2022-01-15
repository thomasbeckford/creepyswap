import React from 'react';

import Card from '../../components/Card';
import { Meta } from '../../layout/Meta';
import { Wrapper } from '../../styles/styled';
import { Main } from '../../templates/Main';

function Swap() {
  return (
    <Main meta={<Meta title="Swap" description="" />}>
      <Card>
        <Wrapper>
          <div>
            <p style={{ fontSize: 30 }}>CPY - FTM</p>
          </div>
        </Wrapper>
      </Card>
    </Main>
  );
}

export default Swap;
