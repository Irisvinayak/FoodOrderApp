import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

type Cache = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };

// Reuse the connection across hot reloads in development.
const globalForMongoose = globalThis as unknown as { mongoose?: Cache };
const cached: Cache = globalForMongoose.mongoose ?? { conn: null, promise: null };
globalForMongoose.mongoose = cached;

export async function connectDB() {
  if (!MONGODB_URI) throw new Error("MONGODB_URI is not set in .env.local");
  if (cached.conn) return cached.conn;
  cached.promise ??= mongoose.connect(MONGODB_URI, { bufferCommands: false });
  cached.conn = await cached.promise;
  return cached.conn;
}
