import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Button = styled.button`
  background-color: #4e8bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #4074e6;
  }
`;

const Select = styled.select`
  padding: 8px;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const MessageContainer = styled.div`
  margin-top: 10px;
  color: #4e8bff;
`;

const App = () => {
  const [selectedAddress, setSelectedAddress] = useState('');
  const [wallets, setWallets] = useState([]);
  const [sentinelInfo, setSentinelInfo] = useState({
    tokenAddress: '',
    userAddress: '',
    amount: 100,
    risksDetected: '',
    extractedInfo: '',
  });

  const [cryptoBotInfo, setCryptoBotInfo] = useState({
    sellAddress: '',
    buyAmount: '',
    slippagePercentage: '',
    gasThreshold: '',
    extractedInfo: '',
  });

  const updateWallets = () => {
    // Replace this with your logic for updating wallets
    console.log('Updating wallets');
  };

  const switchWallet = (newAddress) => {
    setSelectedAddress(newAddress);
  };

  const connectWallets = async () => {
    // Replace this with your logic for connecting to Web3
    if (window.ethereum) {
      window.web3 = new window.Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        console.log('Connected to MetaMask');
        // Additional logic after connecting
        updateWallets();
      } catch (error) {
        console.error('User denied account access or MetaMask is not installed');
      }
    } else {
      console.error('MetaMask is not installed');
    }
  };

  const detectRisks = () => {
    // Add logic to detect risks in Sentinel Mode
    const risksDetected = 'Risks detected in Sentinel Mode'; // Replace with your logic
    setSentinelInfo((prevInfo) => ({ ...prevInfo, risksDetected }));
  };

  const extractSentinelInfo = () => {
    const { tokenAddress, userAddress, amount } = sentinelInfo;
    const extractedInfo = `Sentinel Info: Token Address - ${tokenAddress}, User Address - ${userAddress}, Amount - ${amount}`;
    setSentinelInfo((prevInfo) => ({ ...prevInfo, extractedInfo }));
  };

  const spine = () => {
    // Add logic for the Crypto Sniping Bot
    // This is just a placeholder, replace it with your actual logic
    console.log('Spine button clicked');
  };

  const sell = () => {
    // Add logic for selling in Crypto Sniping Bot
    // This is just a placeholder, replace it with your actual logic
    console.log('Sell button clicked');
  };

  const buy = () => {
    // Add logic for buying in Crypto Sniping Bot
    // This is just a placeholder, replace it with your actual logic
    console.log('Buy button clicked');
  };

  const setSlippagePercentage = () => {
    // Add logic for setting slippage percentage in Crypto Sniping Bot
    // This is just a placeholder, replace it with your actual logic
    console.log('Set Slippage Percentage button clicked');
  };

  const setGasThreshold = () => {
    // Add logic for setting gas threshold in Crypto Sniping Bot
    // This is just a placeholder, replace it with your actual logic
    console.log('Set Gas Threshold button clicked');
  };

  const extractCryptoBotInfo = () => {
    const { sellAddress, buyAmount, slippagePercentage, gasThreshold } = cryptoBotInfo;
    const extractedInfo = `Crypto Bot Info: Sell Address - ${sellAddress}, Buy Amount - ${buyAmount}, Slippage Percentage - ${slippagePercentage}%, Gas Threshold - ${gasThreshold}`;
    setCryptoBotInfo((prevInfo) => ({ ...prevInfo, extractedInfo }));
  };

  return (
    <Container>
      <Title>Blockchain Bot Suite UI</Title>

      <Button onClick={connectWallets}>Connect to Wallet</Button>

      <Select id="walletDropdown" onChange={(e) => switchWallet(e.target.value)}>
        {wallets.map((wallet) => (
          <option key={wallet.get('ethAddress')} value={wallet.get('ethAddress')}>
            {wallet.get('ethAddress')}
          </option>
        ))}
      </Select>

      <FormContainer>
        <h2>Sentinel Mode</h2>
        <Label htmlFor="sentinelTokenAddress">Token Address:</Label>
        <Input
          type="text"
          id="sentinelTokenAddress"
          placeholder="Enter Token Address"
          onChange={(e) => setSentinelInfo((prevInfo) => ({ ...prevInfo, tokenAddress: e.target.value }))}
        />
        <Label htmlFor="sentinelUserAddress">User Address:</Label>
        <Input
          type="text"
          id="sentinelUserAddress"
          placeholder="Enter User Address"
          onChange={(e) => setSentinelInfo((prevInfo) => ({ ...prevInfo, userAddress: e.target.value }))}
        />
        <Label htmlFor="sentinelAmount">Amount:</Label>
        <Input
          type="number"
          id="sentinelAmount"
          placeholder="Enter Amount"
          onChange={(e) => setSentinelInfo((prevInfo) => ({ ...prevInfo, amount: e.target.value }))}
        />
        <Button onClick={detectRisks}>Detect Risks</Button>
        <MessageContainer>{sentinelInfo.risksDetected}</MessageContainer>
        <Button onClick={extractSentinelInfo}>Extract Sentinel Info</Button>
        <MessageContainer>{sentinelInfo.extractedInfo}</MessageContainer>
      </FormContainer>

      <FormContainer>
        <h2>Crypto Sniping Bot</h2>
        <Button onClick={spine}>Spine</Button>
        <Label htmlFor="sellAddress">Sell Address:</Label>
        <Input
          type="text"
          id="sellAddress"
          placeholder="Enter Sell Address"
          onChange={(e) => setCryptoBotInfo((prevInfo) => ({ ...prevInfo, sellAddress: e.target.value }))}
        />
        <Button onClick={sell}>Sell</Button>
        <Label htmlFor="buyAmount">Buy Amount:</Label>
        <Input
          type="number"
          id="buyAmount"
          placeholder="Enter Buy Amount"
          onChange={(e) => setCryptoBotInfo((prevInfo) => ({ ...prevInfo, buyAmount: e.target.value }))}
        />
        <Button onClick={buy}>Buy</Button>
        <Label htmlFor="cryptoSlippagePercentage">Slippage Percentage:</Label>
        <Input
          type="number"
          id="cryptoSlippagePercentage"
          placeholder="Enter Slippage Percentage"
          onChange={(e) =>
            setCryptoBotInfo((prevInfo) => ({ ...prevInfo, slippagePercentage: e.target.value }))
          }
        />
        <Button onClick={setSlippagePercentage}>Set Slippage Percentage</Button>
        <Label htmlFor="cryptoGasThreshold">Gas Threshold:</Label>
        <Input
          type="number"
          id="cryptoGasThreshold"
          placeholder="Enter Gas Threshold"
          onChange={(e) =>
            setCryptoBotInfo((prevInfo) => ({ ...prevInfo, gasThreshold: e.target.value }))
          }
        />
        <Button onClick={setGasThreshold}>Set Gas Threshold</Button>
        <MessageContainer>{cryptoBotInfo.extractedInfo}</MessageContainer>
        <Button onClick={extractCryptoBotInfo}>Extract Crypto Bot Info</Button>
      </FormContainer>
    </Container>
  );
};

export default App;
