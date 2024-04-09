import React, { Children } from 'react'

const Rootlayout = ({ children }: {children:ReactMode}) => {
  return (
        <main>
              {children }
        </main>
  )
}

export default Rootlayout