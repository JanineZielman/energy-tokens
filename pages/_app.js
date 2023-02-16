import React from "react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.scss";
import "./styles/breakpoints.scss";
import Head from "next/head";
import { MagicConnector } from "@thirdweb-dev/react/evm/connectors/magic";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

const magicLinkConnector = new MagicConnector({
  options: {
    apiKey: 'pk_live_AABDA8A837193648',
    rpcUrls: {
      [ChainId.Mumbai]: "https://rpc-mumbai.maticvigil.com",
    },
  },
});

// Array of wallet connectors you want to use for your dApp.
const connectors = ["metamask", magicLinkConnector];

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      walletConnectors={connectors}
      chainRpc={{
        [ChainId.Mumbai]: "https://rpc-mumbai.maticvigil.com",
      }}
    >
      <Head>
        <title>Energy Tokens</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
