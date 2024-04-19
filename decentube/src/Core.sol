// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

error UnauthorizedChannelAccess_CORE();

contract Core {
    modifier checkChannelOwner(address _creator, address _channel) {
        if (channel_storage[_channel].creator != _creator) {
            revert UnauthorizedChannelAccess_CORE();
        }
        _;
    }

    struct Channel {
        string channel_name;
        uint256 subsribers;
        address creator;
        string[] videos;
        uint8 blacklist;
    }

    mapping(address => Channel) channel_storage;

    function addChannel(string calldata _channel_name, address _creator, address _channel)
        public
        checkChannelOwner(_creator, _channel)
    {
        channel_storage[_channel] = Channel(_channel_name, 0, _creator, new string[](0), 0);
    }

    function blackListChannel(address _channel, uint8 value) public {
        channel_storage[_channel].blacklist = (channel_storage[_channel].blacklist + value) % 10;
    }

    function updateChannel(string[] calldata vids, address _channel) public checkChannelOwner(msg.sender, _channel) {
        channel_storage[_channel].videos = vids;
    }
}
