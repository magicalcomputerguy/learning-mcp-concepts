import type { Tool } from "../types/Tool";
import { getWeatherTool } from "./get-weather";
import { sayHelloTool } from "./say-hello";

export const tools: Tool[] = [
    sayHelloTool,
    getWeatherTool,
];
