
// MongoClient를 이용해서 MongoDB를 초기화해 req.db로 넘겨주는 것.
// 쿼리의 속도를 높이기 위해서 넘겨주기 전에 DB Collection들이 createIndex가 됐는지 체크해서
// 안 됐으면 createIndex 하고 넘기는 로직이다.
import { MongoClient } from "mongodb";
import all from "./all";
global.mongo = global.mongo || {};

let indexesCreated = false;
export async function createIndexs(db) {
    await Promise.all([
        db.collection("users").createIndex({ email: 1 }, {
            unique: true
        }),
    ]);
    indexCreated = true;
}

export default async function database(req, res, next) {
    if (!global.mongo.client) {
        global.mongo.client = new MongoClient(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifieTopology: true,
        });
        await global.mongo.client.connect();
    }
    req.dbClient = global.mongo.client;
    req.db = global.mongo.client.db(process.env.DB_NAME);
    if (!indexesCreated) await createIndexs(req.db);
    return next();
}