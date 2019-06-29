import * as alex from "alex";
import { Options } from "../alex_options/options";

type AlexError = string;

async function getAlexConfig() {
  const profanitySureness = await Options.getProfanitySureness();
  return { profanitySureness };
}

export async function getAlexErrors(input: string): Promise<AlexError[]> {
  const report = alex.text(
    input,
    await getAlexConfig()
  );

  const { messages } = report;

  return messages.map(message => {
    return message.message;
  });
}