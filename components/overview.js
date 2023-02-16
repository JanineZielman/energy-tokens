import React, {useEffect, useState} from "react"
import { useDisconnect } from "@thirdweb-dev/react";
import {
  MediaRenderer,
  useContract,
  useContractMetadata,
  Web3Button,
  useUnclaimedNFTs,
  useNFTs
} from "@thirdweb-dev/react";

const Overview = ({address}) => {

  const disconnectWallet = useDisconnect(); // Hook to disconnect from the connected wallet.
  const { contract: nftDrop } = useContract("0x4847482bb4E3c108aF1f7b6f05499C2D4246fE74");
  const { data: contractMetadata, isLoading } = useContractMetadata(nftDrop);
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
    console.log(address)
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
          <div className="available">There are <b>{available}</b> NFTs left.</div>
          <Web3Button
            contractAddress={"0x4847482bb4E3c108aF1f7b6f05499C2D4246fE74"}
            action={(contract) => contract.erc721.claim(1)}
            onSuccess={() => alert("Claimed!")}
            onError={(error) => alert(error.message)}
          >
            Claim 1 NFT
          </Web3Button>
        </div>
        <footer>
          <img src="/logo.png"/>
          <p>© FramerFramed 2023</p>
        </footer>
      </div>
      <div className="nft-grid">
        {nfts?.map((item, i) => {
          return(
            <div className={`nft-item ${ (item.owner == "0x0000000000000000000000000000000000000000") ? 'free' : 'owned'}`} key={`nft-${i}`}>
              <MediaRenderer
                src={item.metadata.image}
                alt={item.metadata.name}
              />
              <div className="nft-info">
                <p>#{item.metadata.id}</p>
                <p>{item.metadata.name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Overview
