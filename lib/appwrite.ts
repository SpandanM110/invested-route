// appwrite.ts

import { Client, Account, ID } from "appwrite";

// Initialize the Appwrite client
const client: Client = new Client();

client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1") // Replace <REGION>
  .setProject("68b6b6f50015a94b1c22"); // Replace with your project ID

// Create an Account instance
const account: Account = new Account(client);

export { client, account, ID };
