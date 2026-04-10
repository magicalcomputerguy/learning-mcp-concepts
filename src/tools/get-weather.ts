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
        try {
            const weatherInfoResponse = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=3`);
            if (!weatherInfoResponse.ok) {
                throw new Error("Weather service failed to response.");
            }

            const weatherInfo = await weatherInfoResponse.text();

            return { content: [{ type: 'text', text: weatherInfo }] };
        } catch (error) {
            return { content: [{ type: 'text', text: 'Weather service unavailable.' }] };
        }
    },
};
