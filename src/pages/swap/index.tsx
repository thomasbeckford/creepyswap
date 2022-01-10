import React from 'react'

import { Meta } from '../../layout/Meta'
import { Main } from '../../templates/Main'
import { Wrapper } from '../../styles/styled'
import Card from '../../components/Card'

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
  )
}

export default Swap
