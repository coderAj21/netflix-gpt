import OpenAI from "openai";
import { OPEN_API_KEY } from "./constant";

export const openai = new OpenAI({apiKey:OPEN_API_KEY,dangerouslyAllowBrowser: true});