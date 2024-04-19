import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../constants";
import YoutubeJSON from "./Youtube.json";

export default function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  let contract = new ethers.Contract(CONTRACT_ADDRESS, YoutubeJSON.abi, signer);
  console.log(contract);
  return contract;
}
