import Button from '../../components/Button'
import React from 'react'

export default function ZX9SPEAKERInfo({name, id}) {
  return (
    <div className='ZX9SPEAKERInfo '>
        <h1>{name.toUpperCase()}</h1>
<p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
<Button text='See Product' id={id} />
    </div>
  )
}
