import {
  Client,
  Storage,
  ID,
  Models,
  Databases,
  Query,
  Account,
} from "appwrite";

const client = new Client();

const PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;
export const BUCKET_ID = process.env.NEXT_PUBLIC_BUCKET_ID;
const dbId = "65ddca9b3bd1514fc298";
const userInfoCollection = "65ddcaac18a8bd06be9e";

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID as string);

export const storage = new Storage(client);
const databases = new Databases(client);
export const account = new Account(client);
export default client;

export type userInfo = {
  userId: string;
  nickname: string;
} & Models.Document;
export function getUserInfo(userId: string) {
  return databases.listDocuments(dbId, userInfoCollection, [
    Query.equal("userId", userId),
  ]);
}
export function createUserInfo(values: {
  userId: string;
  nickname?: string | undefined;
}) {
  databases.createDocument(dbId, userInfoCollection, ID.unique(), values);
}
