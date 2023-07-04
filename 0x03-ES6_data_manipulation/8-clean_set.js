function cleanSet(set, startString) {
  const values = Array.from(set).filter((value) => value.startsWith(startString));
  return values.map((value) => value.substring(startString.length)).join("-");
}

export default cleanSet;

