export default function nameIcon(name: string | undefined) {
  const firstLetter = name
    ?.split(" ")
    .map((name: string) => name.charAt(0))
    .join("")
    .slice(0, 2);
  return firstLetter;
}
