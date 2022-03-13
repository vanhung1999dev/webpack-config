import React from 'react'

import 'styles/index.scss';
import american from '../images/native.jpeg'

function app() {
  return (
      <>
        <div>Say Hello From HungNv</div>
        <div>
            <img  src={american} alt='american' width={200} height={200}/>
        </div>
      </>
  )
}

export default app