export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "pfeng"
    );
  }

  if (query.toLowerCase().includes("your name")) {
    return (
      "pfeng"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const largestMath = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
  if (largestMath){
    const answer = Math.max(parseInt(largestMath[0]), Math.max(parseInt(largestMath[1]), parseInt(largestMath[2])))
    return answer.toString();
  }

  return "";

}
