import React, {useEffect, useState} from "react"
import { useAddress } from "@thirdweb-dev/react";
import { useMagic } from "@thirdweb-dev/react/evm/connectors/magic";
import {
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import Overview from "../components/overview";

const Index = () => {

  const address = useAddress(); // Hook to grab the currently connected user's address.
  const connectWithMagic = useMagic(); // Hook to connect with Magic Link.

  const [email, setEmail] = useState(""); // State to hold the email address the user entered.

  const { contract: nftDrop } = useContract("0x4847482bb4E3c108aF1f7b6f05499C2D4246fE74");
  const { data: contractMetadata, isLoading } = useContractMetadata(nftDrop);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      {address ? 
        <div>
          <Overview address={address}/>
        </div>
      : 
        <div className="floating-nfts">
          <div className="gradient"></div>
          <video id="bgVideo" preload="true" autoPlay loop muted>
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
          </div>
        </div>
      }
    </div>
  )
}

export default Index
