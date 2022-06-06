import Web3 from "web3";
//  web3 설정부분
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
// 스마트 컨트랙트에서 가져온 ABI
const ABI = [];
export { web3, ABI };
