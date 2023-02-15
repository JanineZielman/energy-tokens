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

const Overview = () => {

  const disconnectWallet = useDisconnect(); // Hook to disconnect from the connected wallet.
  const { contract: nftDrop } = useContract("0x4847482bb4E3c108aF1f7b6f05499C2D4246fE74");
  const { data: contractMetadata, isLoading } = useContractMetadata(nftDrop);
  const { data: nfts, isLoading2 } = useNFTs(nftDrop, {
    start: 0,
    count: 20,
  });

  

  if (isLoading && isLoading2) {
    return <div>Loading...</div>;
  } else {
    // const unclaimedNFTCount =  nftDrop.totalUnclaimedSupply();
    console.log(nfts)
  }

  return (
    <div className="overview">
      <div onClick={() => disconnectWallet()}>
        Disconnect Wallet
      </div>
      {nfts?.map((item, i) => {
        return(
          <MediaRenderer
            src={item.metadata.image}
            alt={item.metadata.name}
            key={`nft-${i}`}
            style={{
              width: "200px",
            }}
          />
        )
      })}
    </div>
  )
}

export default Overview
