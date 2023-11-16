import './App.css';

import { useEffect, useState } from "react";


function App() {

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  // state for keeping track of current connected account.
  const [account, setAccount] = useState(null);

  useEffect(() => {
        if (window.ethereum) {
            setIsWalletInstalled(true);
        }
    }, []);

  async function connectWallet() {
        window.ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts) => {
                setAccount(accounts[0]);
            })
            .catch((error) => {
                alert("Something went wrong");
            });
    }

    if (account === null) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-600">
         <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          Welcome to YEN 
        </h1>
          <div className='"bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-6 font-semibold transition duration-300 transform hover:scale-105 focus:outline-none'>
          
          {
            isWalletInstalled ? (
              <button onClick={connectWallet}>Connect Wallet</button>
            ) : (
              <p className='"bg-black-500 hover:bg-blue-600 text-white rounded-full py-3 px-6 font-semibold transition duration-300 transform hover:scale-105 focus:outline-none'>Install Metamask wallet</p>
            )
          }
          </div>

        </div>
      );
    }
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-600">
          <p>Connected as: {account}</p>
        </div>
    );
  }
export default App;