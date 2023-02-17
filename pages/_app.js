import React from "react";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.scss";
import "./styles/breakpoints.scss";
import Head from "next/head";
import { MagicConnector } from "@thirdweb-dev/react/evm/connectors/magic";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Polygon;

const magicLinkConnector = new MagicConnector({
  options: {
    apiKey: 'pk_live_EF892CF7E931E7F6',
    rpcUrls: {
      [ChainId.Polygon]: "https://polygon-rpc.com/",
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
        [ChainId.Polygon]: "https://polygon-rpc.com/",
      }}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: "https://api.defender.openzeppelin.com/autotasks/c1a83afb-465f-40da-adfa-4290ea0c2417/runs/webhook/8b643b62-63ab-4c6f-88f8-3894e46e80ee/FGhUS32EVCGJMYHSbv3bvt",
          },
        },
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
