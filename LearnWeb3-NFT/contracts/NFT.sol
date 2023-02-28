// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.7;

// Import the standard implementation of ERC721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Contact NFT is an 'ERC721' contract
contract NFT is ERC721{

    constructor () ERC721("LearnWeb3's NFT", "LEARN-NFT") {

        // Mint 1 NFTs to myself
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
        _mint(msg.sender, 3);
        _mint(msg.sender, 4);
        _mint(msg.sender, 5);

    }
}