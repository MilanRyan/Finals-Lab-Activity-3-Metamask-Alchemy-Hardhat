// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.3;

contract HelloWorld {
event UpdatedMessages(string oldStr, string newStr);
string public message;

constructor(string memory initMessage){
message = initMessage;
}

// a public
function update(string memory newMessage) public {
string memory oldMsg = message;
message = newMessage;
emit UpdatedMessages(oldMsg, newMessage);
}
}