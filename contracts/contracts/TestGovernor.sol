// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TestGovernor is Governor, GovernorCountingSimple, GovernorVotes, Ownable {
    constructor(IVotes _token)
        Governor("MyGovernor")
        GovernorVotes(_token)
    {}

    function votingDelay() public pure override returns (uint256) {
        return 9; // 9 block to snap shot
    }

    function votingPeriod() public pure override returns (uint256) {
        return 30; // 30 block to vote
    }

    // // The following functions are overrides required by Solidity.
    /**
     * @dev Returns the quorum for a block number, in terms of number of votes: `supply * numerator / denominator`.
     */
    function quorum(uint256 blockNumber) public view virtual override returns (uint256) {
        //원할 시 정족수에 대한 로직 추가 가능
        return 2;
    }

    function quorumReached(uint256 proposalId) public view returns (bool){
        return _quorumReached(proposalId);
    }

    function voteSucceeded(uint256 proposalId) public view returns (bool){
        return _voteSucceeded(proposalId);
    }

}