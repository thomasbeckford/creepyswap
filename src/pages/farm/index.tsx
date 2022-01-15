import React from 'react';

import Card from '../../components/Card';
import { Meta } from '../../layout/Meta';
import { Wrapper } from '../../styles/styled';
import { Main } from '../../templates/Main';

function Farm() {
  return (
    <Main meta={<Meta title="Farm" description="" />}>
      <Card>
        <Wrapper>
          <div>
            <p style={{ fontSize: 30 }}>Search farms</p>
          </div>
        </Wrapper>
      </Card>
    </Main>
  );
}

export default Farm;
