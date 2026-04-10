import { z } from "zod";
import type { Tool } from "../types/Tool";

const inputSchema =  z.object({
    name: z.string(),
});

type Input = z.infer<typeof inputSchema>;

export const sayHelloTool: Tool = {
    name: "say_hello",
    definition: {
        title: "Say Hello",
        description: "Returns a greeting for provided name",
        inputSchema,
    },
    handler: async ({ name }: Input) => {
        return {
            content: [
                {
                    type: 'text',
                    text: `Greetings dear ${name}! I am a tool running inside a MCP Server.`,
                }
            ]
        }
    }
}
