import React from "react"
import {
  MediaRenderer,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import Link from "next/link";

const Nfts = ({address, contract, nfts}) => {

  const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(contract, address);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
    {ownedNFTs?.length > 0 ?
      <div className="profile">
        <div>
          <h1>Your claimed NFT</h1>
          <p>Continue the journey to create your storyline and unlock one other Energy Token by matching with another visitor.</p>
          <p><a href="/Collectors_rights.pdf">Collectors Rights</a></p>
          <Link href="/form"><h2 className="continue">Continue <br/> journey</h2></Link>
        </div>
        <div>
          {ownedNFTs?.map((item, i) => {
            return(
              <div className={`claimed-nft`} key={`nft-owned-${i}`}>
                <MediaRenderer
                  src={item.metadata.image}
                  alt={item.metadata.name}
                  width={500}
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
    :
      <>
        <div className="message">
          <p>Everything has been claimed. <br/> See you next time!</p>
        </div>
        {nfts?.map((item, i) => {
          return(
            <>
            {item.metadata.image &&
              <div className={`nft-item ${ (item.owner == "0x0000000000000000000000000000000000000000") ? 'free' : 'owned'}`} key={`nft-${i}`}>
                <MediaRenderer
                  src={item.metadata.image}
                  alt={item.metadata.name}
                  width={500}
                />
                <div className="nft-info">
                  <p>#{item.metadata.id}</p>
                  <p>{item.metadata.name}</p>
                </div>
              </div>
            }
            </>
          )
        })}
      </>
    }
    </>
  )
}

export default Nfts
