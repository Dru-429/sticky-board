import { Client, Databases } from "appwrite"

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID;
const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_NOTES_ID;
const databasesID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;

if (!endpoint || !projectId) {
  throw new Error('Appwrite environment variables are not set.');
}

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId);
  
const databases = new Databases(client);

const collections = [
  {
      name: "notes",
      id: collectionId,
      dbId: databasesID
  },
];
 
export { client, databases, collections };