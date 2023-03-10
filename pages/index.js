import React, {useEffect, useState} from "react"
import { useAddress } from "@thirdweb-dev/react";
import { useMagic } from "@thirdweb-dev/react/evm/connectors/magic";
import {
  useContract,
  useContractMetadata,
  useMetamask,
} from "@thirdweb-dev/react";
import Overview from "../components/overview";
import Link from "next/link";

const Index = () => {

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 3000)
  })

  const address = useAddress(); // Hook to grab the currently connected user's address.
  const connectWithMagic = useMagic(); // Hook to connect with Magic Link.

  const [email, setEmail] = useState(""); // State to hold the email address the user entered.

  const { contract: nftDrop } = useContract("0x32ED95978e7306710D76450CeD64fdC3C505d7A9");
  const { data: contractMetadata, isLoading } = useContractMetadata(nftDrop);

  const connectWithMetamask = useMetamask();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="main">
      {pageLoading ?
        <div className="loading">Loading...</div>
        :
        <>
        {address ? 
          <div>
            <Overview address={address}/>
          </div>
        : 
          <div className="floating-nfts">
            <div className="gradient"></div>
            <video id="bgVideo" preload="true" autoPlay loop muted playsInline>
              <source src="/nfts.mp4" type="video/mp4" /> 
            </video>
            <div className="step1">
              <h1>START <br/>JOURNEY</h1>
              <p>Fill in your email to create a wallet to collect your digital artwork:</p>
              <input
                type="email"
                placeholder="Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="login-link" onClick={() => {connectWithMagic({ email });}}>
                <img src="/triangle.svg"/>
              </div>
              <p>Or connect to your existing wallet using MetaMask:</p>
              <div onClick={connectWithMetamask} className="meta-button">Connect Metamask</div>
            </div>
          </div>
        }
        <Link href="info"><a className="info-icon"></a></Link>
        </>
      }
    
    </div>
  )
}

export default Index
