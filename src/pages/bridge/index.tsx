import React from 'react'

import { Meta } from '../../layout/Meta'
import { Main } from '../../templates/Main'
import { Wrapper } from '../../styles/styled'
import Card from '../../components/Card'

function Bridge() {
  return (
    <Main meta={<Meta title="Bridge" description="" />}>
      <Card>
        <Wrapper>
          <div>
            <p style={{ fontSize: 30 }}>Bridge to and from Fantom Opera</p>
          </div>
        </Wrapper>
      </Card>
    </Main>
  )
}

export default Bridge
