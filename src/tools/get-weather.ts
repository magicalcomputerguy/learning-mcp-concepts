import { z } from "zod";
import type { Tool } from "../types/Tool";

const inputSchema = z.object({
    city: z.string(),
});

type Input = z.infer<typeof inputSchema>;

export const getWeatherTool: Tool = {
    name: "get_weather",
    definition: {
        title: "Get Weather",
        description: "Returns weather information for provided city.",
        inputSchema,
    },
    handler: async ({ city }: Input) => {
        const weatherInfo = await fetch(`https://wttr.in/${city}?format=3`).then(r => r.text());

        return { content: [{ type: 'text', text: weatherInfo }] };
    },
};
