export function capitalizeFirst(string: string) {

    const newString = string.replace(/[-*]/g, function(match) {
      return match === '-' ? ' ' : '';
    });
  
    const title = [];
    for (const word of newString.split(" ")) {
      title.push(word[0].toUpperCase() + word.slice(1));
    }
    return title.join(" ");
  }