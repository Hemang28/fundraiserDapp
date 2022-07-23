// SPDX-License-Identifier: Unlicensed

pragma solidity >0.7.0 <=0.9.0;

contract CreatorFactory {
    address[] public deployedCreators;
    

    event creatorCreated(
        string name,
        address indexed owner,
        address creatorAddress,
        uint indexed timestamp
    );

    function createCreator(string memory creatorName) public
        
    {

        Creator newCreator = new Creator(creatorName,msg.sender);
        deployedCreators.push(address(newCreator));
                                
        emit creatorCreated(
            creatorName,  
            msg.sender, 
            address(newCreator),
            block.timestamp
        );

    }
}


contract Creator {
    string public name;
    address payable public owner;
    uint public receivedAmount;

    event donated(address indexed donar, uint indexed amount, uint indexed timestamp);

    constructor(
        string memory creatorName, 
        address creatorOwner
    ) {
        name = creatorName;
        owner = payable(creatorOwner);
    }

    function donate() public payable {
        owner.transfer(msg.value);
        receivedAmount += msg.value;
        emit donated(msg.sender, msg.value, block.timestamp);
    }
}
