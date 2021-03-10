import React from 'react'

export default function IndexPage () {
  return (
    <button
      type='button'
      onClick={() => { throw Error('Oops!') }}
    >
      Click me to generate an error
    </button>
  )
}
