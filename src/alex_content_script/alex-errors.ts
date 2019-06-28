import * as alex from "alex";

type AlexError = string;

export function getAlexErrors(input: string): AlexError[] {
  const { messages } = alex.text(input);

  return messages.map(message => {
    return message.message;
  });
}