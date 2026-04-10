// import type { RegisteredTool } from "@modelcontextprotocol/sdk/server/mcp";

export type Tool = {
    name: string;
    definition: any; // Registered Tool
    handler: any;
}
