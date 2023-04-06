import mongoose from "mongoose";


import { MongoMemoryServer } from "mongodb-memory-server";


async function connect(){
   const mongod = await MongoMemoryServer.create();
   const getUri = mongod.getUri();


   try {
      const db = await mongoose.connect(process.env.ATLAS_URI)
      console.log(`Connected to Mongodb Database `)
   } catch (error) {
     console.log(`Error in mongo ${error}`)
   }

}

export default connect