import { GEMINI_API_KEY } from "./constant";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

async function getMoviesfromGemini(query){
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const prompt="Act as a Movie Recommendation system and suggest some movies for the query : "+query
      +".only give me name of 5 movies, comma seperated  like the example result given ahead. Example result:Gadar,Sholay,Don,Golmaal";
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text.split(",");
}

export {getMoviesfromGemini};