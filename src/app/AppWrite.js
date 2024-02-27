import { Client, Storage } from "appwrite";

const client = new Client();

const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

export const storage = new Storage(client);
export default client;
