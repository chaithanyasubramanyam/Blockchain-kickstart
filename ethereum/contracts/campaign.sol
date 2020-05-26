pragma solidity ^0.4.17;

contract Factory{
    address[] deployedCampaigns;
    
    function createCampaign(uint minimum) public{ 
        address deployedCampaignAddress = new Campaign(minimum,msg.sender);
        deployedCampaigns.push(deployedCampaignAddress);
    }
    
    function getCampaigns() public view returns(address[]){
        return deployedCampaigns;        
    } 
}












contract Campaign {
    address public manager;
    uint public minimumContribution;
    mapping(address=>bool) public approvers;
    uint approversCount;
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address=>bool) approvals;
        
    }
    
    
    Request[] public requests;
    
    modifier restricted(){
        require(msg.sender== manager);
        _;
    }
    
    function Campaign(uint minimum, address userAddress) public{
        manager = userAddress;
        minimumContribution = minimum;
        approversCount++;
    }
    
    function contribute() public payable{
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
    }
    
    function createRequest(string description, uint value, address recipient)
    public restricted  {
        Request memory newRequest = Request({
            description : description,
            value: value,
            recipient : recipient,
            complete: false,
            approvalCount: 0
            
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        require(approvers[msg.sender]);
        require(!requests[index].approvals[msg.sender]);
        
        requests[index].approvalCount++;
        requests[index].approvals[msg.sender] = true;
    }
    
    function finalizeRequest(uint index) public restricted{
        
        require(requests[index].approvalCount > (approversCount/2));
        require(!requests[index].complete);
        requests[index].complete = true;
        requests[index].recipient.transfer(requests[index].value);
        
    }

    function getSummary() public view returns (
        uint, uint,uint,uint,address
    ){
        return(
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint){
        return requests.length;
    }
    
    
}
