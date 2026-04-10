import { McpServer, StdioServerTransport } from "@modelcontextprotocol/server";
import { tools } from "./tools";

const server = new McpServer({
    name: 'learning-mcp-concepts',
    version: '1.0.0',
});

for (const tool of tools) {
    server.registerTool(
        tool.name,
        tool.definition,
        tool.handler,
    );
}

const transport = new StdioServerTransport();
await server.connect(transport);
