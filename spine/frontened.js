import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #2c3e50; /* Dark background color */
  color: #ecf0f1; /* Light text color */
  font-family: 'Arial', sans-serif;
  height: 100vh;
`;

const Sidebar = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #34495e; /* Sidebar background color */
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #3498db; /* Title color */
`;

const Button = styled.button`
  background-color: #3498db; /* Button color */
  color: #ecf0f1; /* Button text color */
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin-bottom: 15px;
  border-radius: 5px;
  font-size: 14px;

  &:hover {
    background-color: #2980b9; /* Button color on hover */
  }
`;

const Select = styled.select`
  padding: 8px;
  margin-bottom: 20px;
  width: 100%;
`;

const FormContainer = styled.div`
  background-color: #ecf0f1; /* Form container background color */
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #3498db; /* Label color */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #bdc3c7; /* Input border color */
  border-radius: 4px;
`;

const MessageContainer = styled.div`
  margin-top: 10px;
  color: #3498db; /* Message color */
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  background-color: #e74c3c; /* Remove button color */
  color: #ecf0f1; /* Remove button text color */
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 12px;

  &:hover {
    background-color: #c0392b; /* Remove button color on hover */
  }
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

  const [newWallet, setNewWallet] = useState('');
  const [confirmedWallets, setConfirmedWallets] = useState([]);

  const updateWallets = () => {
    // Replace this with your logic for updating wallets
    console.log('Updating wallets');
  };

  const switchWallet = (newAddress) => {
    setSelectedAddress(newAddress);
  };

  const addWallet = () => {
    if (newWallet && !confirmedWallets.includes(newWallet)) {
      setConfirmedWallets([...confirmedWallets, newWallet]);
      setNewWallet('');
    }
  };

  const removeWallet = (wallet) => {
    const updatedWallets = confirmedWallets.filter((w) => w !== wallet);
    setConfirmedWallets(updatedWallets);
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
    console.log('Spine button clicked');
  };

  const sell = () => {
    // Add logic for selling in Crypto Sniping Bot
    console.log('Sell button clicked');
  };

  const buy = () => {
    // Add logic for buying in Crypto Sniping Bot
    console.log('Buy button clicked');
  };

  const setSlippagePercentage = () => {
    // Add logic for setting slippage percentage in Crypto Sniping Bot
    console.log('Set Slippage Percentage button clicked');
  };

  const setGasThreshold = () => {
    // Add logic for setting gas threshold in Crypto Sniping Bot
    console.log('Set Gas Threshold button clicked');
  };

  const extractCryptoBotInfo = () => {
    const { sellAddress, buyAmount, slippagePercentage, gasThreshold } = cryptoBotInfo;
    const extractedInfo = `Crypto Bot Info: Sell Address - ${sellAddress}, Buy Amount - ${buyAmount}, Slippage Percentage - ${slippagePercentage}%, Gas Threshold - ${gasThreshold}`;
    setCryptoBotInfo((prevInfo) => ({ ...prevInfo, extractedInfo }));
  };

  return (
    <Container>
      <Sidebar>
        <h2>Multi-Wallets</h2>
        <Input
          type="text"
          placeholder="Enter Wallet Address"
          value={newWallet}
          onChange={(e) => setNewWallet(e.target.value)}
        />
        <Button onClick={addWallet}>Confirm Wallet</Button>
        <List>
          {confirmedWallets.map((wallet) => (
            <ListItem key={wallet}>
              {wallet}
              <RemoveButton onClick={() => removeWallet(wallet)}>Remove</RemoveButton>
            </ListItem>
          ))}
        </List>
      </Sidebar>

      <MainContent>
        <Title>Blockchain Bot Suite UI</Title>

        <Button onClick={connectWallets}>Connect to Wallet</Button>

        <Select id="walletDropdown" onChange={(e) => switchWallet(e.target.value)}>
          {wallets.map((wallet) => (
            <option key={wallet} value={wallet}>
              {wallet}
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
            onChange={(e) =>
              setSentinelInfo((prevInfo) => ({ ...prevInfo, tokenAddress: e.target.value }))
            }
          />
          <Label htmlFor="sentinelUserAddress">User Address:</Label>
          <Input
            type="text"
            id="sentinelUserAddress"
            placeholder="Enter User Address"
            onChange={(e) =>
              setSentinelInfo((prevInfo) => ({ ...prevInfo, userAddress: e.target.value }))
            }
          />
          <Label htmlFor="sentinelAmount">Amount:</Label>
          <Input
            type="number"
            id="sentinelAmount"
            placeholder="Enter Amount"
            value={sentinelInfo.amount}
            onChange={(e) =>
              setSentinelInfo((prevInfo) => ({ ...prevInfo, amount: e.target.value }))
            }
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
            onChange={(e) =>
              setCryptoBotInfo((prevInfo) => ({ ...prevInfo, sellAddress: e.target.value }))
            }
          />
          <Button onClick={sell}>Sell</Button>
          <Label htmlFor="buyAmount">Buy Amount:</Label>
          <Input
            type="number"
            id="buyAmount"
            placeholder="Enter Buy Amount"
            onChange={(e) =>
              setCryptoBotInfo((prevInfo) => ({ ...prevInfo, buyAmount: e.target.value }))
            }
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
      </MainContent>
    </Container>
  );
};

export default App;
