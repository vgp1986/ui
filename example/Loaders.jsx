import React from 'react'
import Loader from '../components/Loader'
import Code from './Code'

export default function Loaders () {
  return (
    <div>
      <h3>Primary</h3>
      <Code>
        <Loader size='big' />
        <Loader />
        <Loader size='small' />
        <Loader size='tiny' />
      </Code>

      <h3>Secondary</h3>
      <Code>
        <Loader color='blue' size='big' />
        <Loader color='blue' />
        <Loader color='blue' size='small' />
        <Loader color='blue' size='tiny' />
      </Code>
    </div>
  )
}