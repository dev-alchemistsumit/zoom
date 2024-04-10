import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { Children } from 'react'

const Rootlayout = ({ children }: {children:ReactMode}) => {
  return (
        <main>

                    <StreamVideoProvider>
                          {children }
                      </StreamVideoProvider>
        </main>
  )
}

export default Rootlayout