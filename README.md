#MAGIC MINT


##Why lazy minting?

  The act of minting an NFT in essence is writing some data on the blockchain which requires a fee to the network for providing computational power and storage for your data.
  The fees these days with the high network usage and the scaling solutions being a “a work in progress” can be substantial.

  This can be a discouraging fact for the creators who may get second thoughts about creating NFTs who may not sell eventually and investing a bunch of money for something uncertain.
  This brings up the questions, why and how to create an item without paying for the network fee at the time of the mint.

  This problem is solved by introducing lazy minting that provides a way for a creator to create the NFT without paying for the transaction execution. The transaction is being executed at the moment when another user decides to buy or claim the NFT.

  Creating an NFT  !==  Minting / Claiming



##Lazy minting throughout the ecosystem

  Lazy minting is already adopted by a few of the most popular marketplaces as the default way to create an NFT. 
  It is a powerful concept that shapes the creators economy with a lot of unexploited use cases.





##How does it work?

  The key feature with lazy minting is that instead of directly calling a mint function that executes a transaction on chain and saves your data( as it is for minting) , the creator provides a signature with his address private key. 
  The signature is stored off-chain alongside other NFT metadata and proves that the token which is yet to be minted is authorized and legitimate.

  If the signature belongs to an address that is previously authorized to create an NFT, the actual minter / buyer / claimer is allowed to execute the transaction and put the data on chain, making him the owner of the freshly lazy-minted NFT.

##Lazy minting on Rarible Protocol


  Rarible Protocol provides easy tooling and a few features to support lazy-minting that make your life a lot easier.

  Best way to get around it is by using the rarible-starter-app built on top of Austin Griffits well known ethereum development kit Scaffold-Eth.

  All you need to do is fork the Scaffold-Eth template and switch to the rarible-starter-app branch.

  Following the instructions about package installation and setup in the Readme.md file, you will be able to see something like this.

  Here, you can see all the major features that the protocol provides and you will be able to test them on how they actually work. 

  The 3 main things that we are focusing on in terms of the lazy minting app are: 

  “IPFS upload”
  “Lazy Mint”
  “Rarible Item Indexer”

##Lazy minting to specific addresses

###Claiming an NFT.

  Lazy minting is cool. We got that out of the way. But what if you wanted to lazy mint an item that will be restricted for minting to anyone? 

##Use cases:
  You are an artist that wants to create an NFT and send it to your friend without paying the gas fee. This nft is really exclusive and you want your friend to be the only one with the ability to mint it.
  You are a DAO that wants to send its most active members a special NFT that they can vote with in the DAO decision making processes. These NFTs are defining the voting power of the DAO member therefore they will have to be unique for every DAO member. DAO lead mints all these special tokens on the app and the DAO members can use the app to mint / claim them. 











