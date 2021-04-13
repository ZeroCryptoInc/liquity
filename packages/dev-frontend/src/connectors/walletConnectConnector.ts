import {WalletConnectConnector} from "@web3-react/walletconnect-connector";
import dotenv from "dotenv";

dotenv.config();

const POLLING_INTERVAL = 12000;
const RPC_URL = process.env.REACT_APP_INFURA_RPC_URL as string;

export const walletConnectConnector = new WalletConnectConnector({
  rpc: { 1: RPC_URL },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});

export const walletConnectConnectorIsAvailable = () => Boolean(process.env.REACT_APP_INFURA_RPC_URL);
