import { useState } from "react";
import styles from "./Minter.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { ethers, Contract } from 'ethers';
import abi from './ragefools.json'

const Minter = () => {
  const [provider, setProvider] = useState(undefined);
  const [nft, setNft] = useState(undefined);
  const [isConnected, setConnected] = useState(false);
  const [quantidade, setQuantidade] = useState(1);
  const [address, setAddress] = useState(undefined);
  const [minted, setMinted] = useState(false);
  const [signer, setSigner] = useState(undefined);

  /*
  inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    // May be call for search result
  }
  */

  const inc = async (event) => {
    setQuantidade(quantidade + 1);
  };
  const dec = async () => {
    setQuantidade(quantidade - 1);
  };

  const init = async () => {
    console.log('entrou');
    if (window.ethereum) {
      try {
        // check if the chain to connect to is installed
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x89' }], // switch to Rinkeby
        });
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const account = signer.getAddress();
        const nft = new Contract(
          '0x57d98F67B33f62c82a061f9D83e25409ad109bD2',
          abi,
          signer
        );
        setProvider(provider);
        setNft(nft);
        //console.log(provider);
        //console.log(nft);
        setConnected(true);
        setAddress(account);
        setSigner(signer);
      } catch (error) {
        // This error code indicates that the chain has not been added to MetaMask
        // if it is not, then install it into the user MetaMask
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: '0x89',
                  rpcUrl: 'https://polygon-rpc.com/',
                },
              ],
            });
          } catch (addError) {
            console.error(addError);
          }
        }
        console.error(error);
      }//FIM CATCH
    } else {
      // if no window.ethereum then MetaMask is not installed
      alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
    }
  };

  const mint = async () => {
    setMinted(false);

    //TX Mint
    try {
      console.log("Executing Minting...");
      // const user = ethereum.selectedAddress();
      console.log('contract: ' + nft)
      console.log('provider: ' + provider)
      console.log('signer: ' + signer)
      console.log('address: ' + address)
      console.log('quantidade: ' + quantidade)

      const price = await nft.cost()
      console.log('price: ' + price)

      const baseURI = await nft.baseURI()
      console.log('baseURI: ' + baseURI)


      const value = (price * quantidade).toString()
      console.log(value)

      const transaction = await nft.mint(address, quantidade, { value: value })
      await transaction.wait()
      console.log(transaction)

      /*
      const tx = await nftWallet.sendTransaction({
        to: '0x57d98F67B33f62c82a061f9D83e25409ad109bD2',
        from: address,
        value: '1000000000000000000',
        data: nft.mint(address, quantidade)
      })
      await tx.wait()
      console.log(tx)
      */

      /*
      const tx1 = await nft.mint(address, quantidade)
      tx1.wait();
      console.log(tx1)
      */
      



    
      console.log("Minting DONE");
      setMinted(true);
    } catch (error) {
      console.log('That minting did not go well.')
    }


   }


  return (

    <div className={styles.minter}>
      <h2 className={styles._title}>Crypto Fools</h2>
      {!isConnected}

      {isConnected ? (
        <Card className={styles._card}>
          <CardContent className={styles._card_content}>

            <div className="Minter">
              <h1 id="title">Minter</h1>
              <p>
                Enter quantity you want to mint (max 10):
              </p>
 
                <div className={styles._number_input}>
                  <button onClick={() => dec()}>-</button>
                  <input  value={quantidade} type="number" id="total"
                  onChange={(event)=>setQuantidade(event.target.value)}
                  />
                  <button onClick={() => inc()}>+</button>
                </div>

                <button
                  type='button'
                  onClick={() => mint()}
                >
                  Mint
                </button>
              <hr />
              {minted ? (
                <a href="https://testnets.opensea.io/collection/mekicats-test-vjlfmsxqh2">LINK TO OPENSEA</a>
              ) : (
                <div>Awaiting to mint...</div>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className={styles._card}>
            <CardContent className={styles._card_content}>
              <p>The public mint is live:</p>
              <AccountBalanceWalletIcon style={{ fontSize: "50px" }} />
            <button className={styles.wallet_btn} onClick={() => init()}>
              connect a wallet
            </button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Minter;
