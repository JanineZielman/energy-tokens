import React, {useEffect, useState} from "react"
import Collapsible from 'react-collapsible';
import Link from "next/link";

const Index = () => {

  return (
    <div className="main info-page">
      <Link href="/"><a className="close-icon" ></a></Link>
      <Collapsible trigger="What All the World Desires" open={true}>
        <p>
          {`Musasa and Maarten Vanden Eynde have made several works together since 2015. For their fifth collaboration now, they searched for the most iconic symbols depicting the history of energy. What All The World Desires (2022) is a collection of 30 paintings on small wooden panels illustrating the origin and use of a variety of natural and industrial materials that make a reference to energy production and storage. The whole collection forms a family tree or 'analogue cloud' in which the visitor can constantly find new links and connections between the past and the future of energy production by creating visual narratives.`}
        </p>
      </Collapsible>
      <Collapsible trigger="What are Energy Tokens?">
        <p>
          {`Energy Tokens are unique digital memories that are forever and immutably stored on the blockchain in the form of NFTs. Once you collect one of them it is uniquely yours and stored in your wallet. Energy tokens have 30 economic symbols depicting the history of energy. Available only to the visitors of the exhibition Charging Myths at Framer Framed in Amsterdam, the Energy tokens are divided into two generations: the first 20 depicting current technologies and energy sources, the second showcasing primal sources of energy - untouched by mankind.`}
        </p>
        <p>
          {`In order to obtain the second generation Energy Tokens, participants have to create a narrative and go back in time, finding another participant to match with and combine tokens to obtain the 10 special ones.`}
        </p>
        <p>
          {`Energy Tokens is an experiment conducted by Musasa, Maarten Vanden Eynde, Aiwen Yin, Janine Zielman, Leonardo Dellanoce and Arthur Steiner (Memory Gems).`}
        </p>
      </Collapsible>
      <Collapsible trigger="What are NFTs?">
        <p>
          {`NFTs serve as a proof of ownership of digital art, a unique fingerprint which guarantees that the digital artwork exclusively belongs to the person who acquired it. NFTs can be used as a way to exchange social or artistic value within a community. They can also be traded on secondary markets such as Open Sea. The Energy Tokens by Musasa and Maarten Vanden Eynde are residing on the Polygon Blockchain. `}
        </p>
      </Collapsible>
      <Collapsible trigger="Why Polygon Blockchain?">
        <p>
          {`Polygon Blockchain is an eco-friendly blockchain, using Proof-of-Stake instead of Proof-of-Work. It consumes much less energy than traditional blockchains and the group behind it claims it to be already carbon-neutral (since 2021), now aiming to become carbon-negative. For this reason, it was chosen as the backbone of this project instead of other blockchains. You can read more about the official calculations and statements`} <a href="https://polygon.technology/blog/polygon-the-eco-friendly-blockchain-scaling-ethereum-bbdd52201ad" target="_blank" rel="noreferrer">here.</a>
        </p>
      </Collapsible>
      <Collapsible trigger="Why blockchain for Energy Tokens?">
        <p>
          {`For the creators of the project it was important that Energy Tokens engages with and questions blockchain technology. The artwork What All the World Desires (2022) investigates the history of energy through visual storytelling. Blockchain is a technology that creates an immutable memory chain of events and objects, by solving complex cryptographic puzzles thanks to computers consuming vast amounts of energy.`}
        </p>
        <p> 
          {`In a way, blockchain technology creates an unchangeable historical record of events by actively using electricity to store this information. As such, it represents the perfect counterpart to the artwork - inscribing the history of energy forever through energy use.`}
        </p>
        <p>
          {`The project investigates and highlights points of friction between human history and memory vs digital storage and immutable blockchains, the complex and violent history of energy vs energy overuse in digital technologies.`}
        </p>
      </Collapsible>
    </div>
  )
}

export default Index
