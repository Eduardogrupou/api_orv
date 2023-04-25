import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host: "38.242.132.95",
    port: 3306,
    database: "orvalh39_perfume.sql",
    user: "orvalh39_perfume.sql",
    password: "root",
  },
});
export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
