import {
  Client,
  Storage,
  Account,
} from "appwrite";

const client = new Client();

const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID as string);

export const storage = new Storage(client);
export const account = new Account(client);
export default client;

export async function checkAccount() {
  const res = await account.get();
  return res;
}
