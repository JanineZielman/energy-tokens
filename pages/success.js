import React, {useEffect, useState} from "react"
import Collapsible from 'react-collapsible';
import Link from "next/link";

const Index = () => {

  return (
    <div className="main success-page">
      <Link href="/"><a className="back">Go back to your gallery</a></Link>
      <h2>The match reveal will take place on Sunday 26th at 11 AM CET. Come back and explore your gallery to see if the match was successful</h2>
    </div>
  )
}

export default Index
