// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
// import "@openzeppelin/contracts/utils/Strings.sol";

import "./Core.sol";

contract Channel is ERC1155, ERC1155Pausable, AccessControl, ERC1155Burnable, ERC1155Supply {
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant MODERATOR_ROLE = keccak256("MODERATOR_ROLE");

    //core contract instance
    Core private immutable core_contract = Core(0xdaDD30aAEe8E15F925b3b0F0e18f84E6FE62C6f9);

    // channel variables
    uint256 public vid_count;
    string channel_name;
    string banner_cid;
    string icon_cid;
    uint256 subscriber_count = 0;

    uint256 moderator_count;
    mapping(address => bool) isMod;

    string[] videos;

    address channel_owner;

    string collection;

    constructor(
        address defaultAdmin,
        string memory _channel_name,
        string memory _banner_cid,
        string memory _icon_cid,
        string memory _token_uri,
        string memory _collection
    ) ERC1155(_token_uri) {
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
        _grantRole(PAUSER_ROLE, defaultAdmin);
        _grantRole(MINTER_ROLE, defaultAdmin);

        channel_name = _channel_name;
        banner_cid = _banner_cid;
        icon_cid = _icon_cid;
        channel_owner = msg.sender;
        collection = _collection;

        core_contract.addChannel(channel_name, channel_owner, address(this));
        _mint(channel_owner, 1, 1000, "");
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    // The following functions are overrides required by Solidity.

    function _update(address from, address to, uint256[] memory ids, uint256[] memory values)
        internal
        override(ERC1155, ERC1155Pausable, ERC1155Supply)
    {
        super._update(from, to, ids, values);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC1155, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    // --------------------------------------------------------------------------

    function make_moderator(address mod) public onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(MODERATOR_ROLE, mod);
        isMod[mod] = true;
        moderator_count++;
    }

    function remove_moderator(address mod) public onlyRole(DEFAULT_ADMIN_ROLE) {
        _revokeRole(MODERATOR_ROLE, mod);
        isMod[mod] = false;
        moderator_count--;
    }

    function create_video(string memory vid_uri, string memory cid, bytes calldata data)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        _setURI(vid_uri);
        _mint(channel_owner, vid_count, 1, data);
        videos.push(cid);
        vid_count++;
        core_contract.updateChannel(videos, address(this));
    }

    //----------------OPENSEA-----------------------------------

    function tokenURI(uint256 _tokenId) public view returns (string memory) {
        return uri(_tokenId);
    }

    // or e.g. https://external-link-url.com/my-contract-metadata.json
    function contractURI() public view returns (string memory) {
        return collection;
    }

    /*
    TODO: 
    1. CID matching (equal function in string sol)
    2. BUYING OTHER's CONTENT
    3. BUYING CREATOR's NFT
    4. VIEWING INCENTIVE
    5. Deploy a ID mechanism for nfts and tokens
    */

    // collection => channel banner + channel icon metadata
}
