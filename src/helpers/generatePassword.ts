export function generatePassword(
  length: number,
  upperChecked: boolean,
  lowerChecked: boolean,
  numbersChecked: boolean,
  symbolsChecked: boolean
): string {
  let result = "";
  const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  const numbersCharacters = "0123456789";
  const symbolsCharacters = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';

  const characters =
    (upperChecked ? upperCharacters : "") +
    (lowerChecked ? lowerCharacters : "") +
    (numbersChecked ? numbersCharacters : "") +
    (symbolsChecked ? symbolsCharacters : "");

  const charactersLength = characters.length;
  let counter = 0;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
