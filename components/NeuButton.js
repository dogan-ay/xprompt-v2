import Link from 'next/link'
import React from 'react'

const NeuButton = (props) => {
  return (
    <Link href={props.href}>
        <p className='w-28 rounded-lg text-center py-1 bg-slate-100 hover:bg-slate-400 hover:text-white shadow-sm'>{props.name}</p>
    </Link>
  )
}

export default NeuButton