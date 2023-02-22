import React, {useEffect, useState} from "react"
import { useDisconnect } from "@thirdweb-dev/react";
import {
  useContract,
  Web3Button,
  useNFTs
} from "@thirdweb-dev/react";
import Nfts from "./nfts";

const Overview = ({address}) => {

  const disconnectWallet = useDisconnect(); // Hook to disconnect from the connected wallet.
  const { contract: nftDrop } = useContract("0xae40b9452b72ad13E2C4EF9283E37e2D0C13E9C0");
  // const { data: contractMetadata, isLoading } = useContractMetadata(nftDrop);
  const { data: nfts, isLoading2 } = useNFTs(nftDrop, {
    start: 0,
    count: 20,
  });


  const [available, setAvailable] = useState(null);

  useEffect(() => {
    if(nfts?.length >= 1){
      setAvailable(document.getElementsByClassName('free').length)
    }
  }, [nfts])

  if (isLoading2) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="overview">
      <div className="sidebar">
        <div className="info">
          <h1>Energy Tokens</h1>
          <p className="small">{address}</p>
          <div className="flex">
            <p>You are connected</p>
            <div onClick={() => disconnectWallet()} className="button">
              Disconnect Wallet
            </div>
          </div>
          <br/>
          {available ? <div className="available">There are <b>{available}</b> NFTs left to claim.</div> : '' }
          <div className="web3-button">
            <Web3Button
              contractAddress={"0xae40b9452b72ad13E2C4EF9283E37e2D0C13E9C0"}
              action={(contract) => contract.erc721.claim(1)}
              onSuccess={() => alert("Claimed!")}
              onError={(error) => alert(error.message)}
            >
              Claim your NFT
            </Web3Button>
            <div className="small-note">*Make sure your network is on the Polygon Mainnet!</div>
          </div>
        </div>
        <footer>
          <img src="/logo.png"/>
          <p>© FramerFramed 2023</p>
        </footer>
      </div>
      <div className="nft-grid">
        {nfts &&
          <Nfts address={address} contract={nftDrop} nfts={nfts}/>
        }
      </div>
    </div>
  )
}

export default Overview
