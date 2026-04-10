import { McpServer, StdioServerTransport } from "@modelcontextprotocol/server";
import { z } from "zod";

const server = new McpServer({
    name: 'learning-mcp-concepts',
    version: '1.0.0',
});

server.registerTool(
    'greet_user',
    {
        title: 'Greeting Tool',
        description: 'This tool just greets the user.',
        inputSchema: z.object({
            name: z.string(),
        }),
    },
    async ({ name }: { name: string }) => {
        return {
            content: [
                {
                    type: 'text',
                    text: `Greetings dear ${name}! I am a tool running inside a MCP Server.`,
                }
            ]
        }
    }
);

const transport = new StdioServerTransport();
await server.connect(transport);
