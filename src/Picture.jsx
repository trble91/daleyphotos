"use client"

import React from 'react'
import Image from 'next/image'

export default function Picture() {
  return (
    <div>
          <Image
             src="/aaron.png"
             width={200}
             height={100}
             alt="photo"
        
                />
    </div>
  )
}
