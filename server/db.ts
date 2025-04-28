import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Mock database connection for local development
export const pool = new Pool({ connectionString: "postgresql://user:password@localhost:5432/mydb" });
export const db = drizzle({ client: pool, schema });
