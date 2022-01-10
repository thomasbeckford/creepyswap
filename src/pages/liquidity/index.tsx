import React from 'react'

import { Meta } from '../../layout/Meta'
import { Main } from '../../templates/Main'
import { Wrapper } from '../../styles/styled'
import Card from '../../components/Card'

function Liquidity() {
  return (
    <Main meta={<Meta title="Liquidity" description="" />}>
      <Card>
        <Wrapper>
          <div>
            <p style={{ fontSize: 30 }}>Get Liquidity</p>
            <p style={{ fontSize: 20 }}>
              Supply equal value parts of two different tokens
            </p>
          </div>
        </Wrapper>
      </Card>
    </Main>
  )
}

export default Liquidity
