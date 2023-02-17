import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useState } from "react";
import { useMagic } from "@thirdweb-dev/react/evm/connectors/magic";
import {
  MediaRenderer,
  useContract,
  useContractMetadata,
  Web3Button,
} from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const address = useAddress(); // Hook to grab the currently connected user's address.
  const connectWithMagic = useMagic(); // Hook to connect with Magic Link.
  const disconnectWallet = useDisconnect(); // Hook to disconnect from the connected wallet.

  const [email, setEmail] = useState<string>(""); // State to hold the email address the user entered.

  const { contract: nftDrop } = useContract("0x0D6EEdF9e6ea51cB57E120239be9758f39B3cD59");
  const { data: contractMetadata, isLoading } = useContractMetadata(nftDrop);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(contractMetadata)

  return (
    <>
      <div>

      <MediaRenderer
        src={contractMetadata.image}
        alt={contractMetadata.name}
        style={{
          width: "200px",
        }}
      />

        <p>{contractMetadata.name}</p>
        

        {address ? (
          <>
            <h2 style={{ fontSize: "1.3rem" }}>You&apos;re Connected! 👋</h2>{" "}
            <p>{address}</p>
            <a onClick={() => disconnectWallet()}>
              Disconnect Wallet
            </a>
            <Web3Button
              contractAddress={"0x0D6EEdF9e6ea51cB57E120239be9758f39B3cD59"}
              action={(contract) => contract.erc721.claim(1)}
              onSuccess={() => alert("Claimed!")}
              onError={(error) => alert(error.message)}
            >
              Claim NFT
            </Web3Button>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: "1.3rem" }}>Login With Email</h2>
            <div
              style={{
                width: 500,
                maxWidth: "90vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 16,
              }}
            >
              <input
                type="email"
                placeholder="Your Email Address"
                style={{ width: "90%", marginBottom: 0 }}
                onChange={(e) => setEmail(e.target.value)}
              />

              <a
                onClick={() => {
                  connectWithMagic({ email });
                }}
              >
                Login
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
