import React from 'react'
import { Header } from './Header'
import {Button} from './Button-comps/Button'

export function Content({ className }) {
    return (
      <div className={className}>
      <Header />
      <div className="flex justify-center">
          <Button />
        </div>
        </div>
  )
}
