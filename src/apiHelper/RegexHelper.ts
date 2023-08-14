export class RegexHelper {
    isValidPostCode = (postcode: string) => {
        // a pattern having 'JavaScript' followed by a digit
        const regex = /[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}$/gi;

        // finding matches in the string for the given regular expression
        let result = postcode.match(regex);

        return result !== null;
    }
}