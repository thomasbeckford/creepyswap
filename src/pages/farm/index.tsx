import React from 'react'

import { Meta } from '../../layout/Meta'
import { Main } from '../../templates/Main'
import { Wrapper } from '../../styles/styled'
import Card from '../../components/Card'

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
  )
}

export default Farm
