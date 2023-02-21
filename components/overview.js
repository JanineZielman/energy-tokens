import React, {useEffect, useState} from "react"
import { useDisconnect } from "@thirdweb-dev/react";
import {
  MediaRenderer,
  useContract,
  useContractMetadata,
  Web3Button,
  useOwnedNFTs,
  useNFTs
} from "@thirdweb-dev/react";
import Nfts from "./nfts";

const Overview = ({address}) => {

  const disconnectWallet = useDisconnect(); // Hook to disconnect from the connected wallet.
  const { contract: nftDrop } = useContract("0x0D6EEdF9e6ea51cB57E120239be9758f39B3cD59");
  // const { data: contractMetadata, isLoading } = useContractMetadata(nftDrop);
  const { data: nfts, isLoading2 } = useNFTs(nftDrop, {
    start: 0,
    count: 20,
  });


  const [available, setAvailable] = useState(null);

  useEffect(() => {
    if(nfts?.length > 1){
      setAvailable(document.getElementsByClassName('free').length)
    }
  }, [nfts])

  if (isLoading2) {
    return <div>Loading...</div>;
  } else {
    console.log(nfts)
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
          <div className="available">There are <b>{available}</b> NFTs left to claim.</div>
          <div className="web3-button">
            <Web3Button
              contractAddress={"0x0D6EEdF9e6ea51cB57E120239be9758f39B3cD59"}
              action={(contract) => contract.erc721.claim(1)}
              onSuccess={() => alert("Claimed!")}
              onError={(error) => alert(error.message)}
            >
              Claim your NFT
            </Web3Button>
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
