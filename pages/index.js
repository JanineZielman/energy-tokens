import React, {useEffect, useState} from "react"
import { useAddress } from "@thirdweb-dev/react";
import { useMagic } from "@thirdweb-dev/react/evm/connectors/magic";
import {
  useContract,
  useContractMetadata,
  useMetamask,
} from "@thirdweb-dev/react";
import Overview from "../components/overview";

const Index = () => {

  const address = useAddress(); // Hook to grab the currently connected user's address.
  const connectWithMagic = useMagic(); // Hook to connect with Magic Link.

  const [email, setEmail] = useState(""); // State to hold the email address the user entered.

  const { contract: nftDrop } = useContract("0x0D6EEdF9e6ea51cB57E120239be9758f39B3cD59");
  const { data: contractMetadata, isLoading } = useContractMetadata(nftDrop);

  const connectWithMetamask = useMetamask();

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
      <div className="info-icon"></div>
    </div>
  )
}

export default Index
