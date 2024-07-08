import OpenAI from "openai";
import { OPEN_API_KEY } from "./constant";

const openai = new OpenAI({apiKey:OPEN_API_KEY,dangerouslyAllowBrowser: true});

async function getMoviesfromOpenAi(query){
    const gptQuery="Act as a Movie Recommendation system and suggest some movies for the query : "+query
      +".only give me name of 5 movies, comma seperated  like the example result given ahead. Example result:Gadar,Sholay,Don,Golmaal";
    const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content:gptQuery }],
        model: 'gpt-3.5-turbo',
    });
    console.log(gptResult.choices?.[0]?.message?.content);
    const gptMovies=gptResult.choices?.[0]?.message?.content.split(",");
    return gptMovies;
}
export {getMoviesfromOpenAi};