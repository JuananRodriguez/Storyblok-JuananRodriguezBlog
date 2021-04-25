import React from 'react'
import DoubleTitle from './DoubleTitle'
import BackgroundTitle from './BackgroundTitle'

const Components = {
  'double_title': DoubleTitle,
  'background_title': BackgroundTitle,
}

const DynamicTitle = ({ blok }) => {
  const { type } = blok;

  if (typeof Components[type] !== 'undefined') {
    const Component = Components[type]
    return <Component blok={blok} />
  }

  return null
}

export default DynamicTitle