// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
contract cryptoSnipingBot {
    using SafeMath for uint;
    address public owner;
    IERC20 public token;
    uint public percentageDropToSell;
    uint amount;
    uint public slippegePercentage;
    uint public gasThreshold;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }


    constructor(address _tokenAddress, uint _amount) {
        token = IERC20(_tokenAddress);
        owner = msg.sender;
        percentageDropToSell = 10;
        amount = _amount;

    }

    struct Actions {
        bool sell;
        bool spine;
        bool placeForPreSale;
        bool scanned;
        bool sold;
    }

    mapping(address => Actions) public actions;

    function spine() external onlyOwner {
       require(amount >= 100, "amount must be 100 at least");
       require(!actions[msg.sender].spine, "spine not done yet");

       actions[msg.sender] = Actions({
           spine: true,
           sell: false, 
           placeForPreSale: false,
           scanned: false,
           sold: false
       });

    }

      function preSale() external onlyOwner{
        require(amount >= 100, "amount has to be at leat 100");
         require(!actions[msg.sender].placeForPreSale, "preSale not done yet");

       actions[msg.sender] = Actions({
           spine: true,
           sell: true, 
           placeForPreSale: false,
           scanned: false,
           sold: false
       });


            token.transferFrom(msg.sender, address(this), amount);

      }


      function scan() external onlyOwner{
        require(amount >= 100, "amount has to be at least 100");
        require(!actions[msg.sender].scanned, "scan not done yet");

       actions[msg.sender] = Actions({
           spine: true,
           sell: true, 
           placeForPreSale: true,
           scanned: true,
           sold: false
       });

      }

      function sell(address player) external onlyOwner{
        require(percentageDropToSell== 10, "at least the percentage should be 10");
             require(!actions[msg.sender].sold, "selling done");  
       actions[msg.sender] = Actions({
           spine: true,
           sell: true, 
           placeForPreSale: true,
           scanned: true,
           sold: true
       });

       uint initialTokenBalance = token.balanceOf(address(this));
       uint tokensTosell = initialTokenBalance.mul(percentageDropToSell).div(100);
       uint expectedSaleAmount = tokensTosell.mul(100).div(100 - slippegePercentage);
       uint receivedAmount = token.balanceOf(address(this));
       require(receivedAmount >= expectedSaleAmount, "slippege detected");
       uint gasUsed = gasleft();
       require(gasUsed <= gasThreshold);

          token.transferFrom(player, address(this), amount);
          token.transfer(owner, receivedAmount);


      }

      
    function setSlippagePercentage(uint _slippagePercentage) external onlyOwner {
        slippegePercentage = _slippagePercentage;
    }

    function setGasThreshold(uint _gasThreshold) external onlyOwner {
        gasThreshold = _gasThreshold;
    }

}
