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

const Nfts = ({address, contract, nfts}) => {

  console.log(address)
  const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(contract, address);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    console.log(ownedNFTs)
  }

  return (
    <>
    {ownedNFTs?.length > 0 ?
      <div className="profile">
        <h1>Your claimed NFT</h1>
        <p>Continue the journey to create your storyline and unlock one other Energy Token by matching with another visitor.</p>
        {ownedNFTs?.map((item, i) => {
          return(
            <div className={`claimed-nft`} key={`nft-owned-${i}`}>
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
        <h2>Continue <br/> journey</h2>
      </div>
    :
      <>
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
      </>
    }
    </>
  )
}

export default Nfts
