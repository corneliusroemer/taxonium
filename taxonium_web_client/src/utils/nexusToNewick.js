// get nexusString from tree.nexus
function nexusToNewick(nexusString) {
  // get Translate section if present
  const translateBlock = nexusString.match(/Translate(.*?);/gims);
  const translate = translateBlock[0];

  let translations = {};

  // get all the translations
  translate.split("\n").forEach((line) => {
    line = line.trim();
    const parts = line.split(" ");
    if (parts.length === 2) {
      const key = parts[0];
      const value = parts[1].replace(",", "");
      translations[key] = value;
    }
  });

  // get all the trees

  const treeBlock = nexusString.match(/tree TREE1 = (.*?;)/gims);

  // get the Newick string from the tree block
  const newickString = treeBlock[0].match(/\((.*?)\).+;/gims)[0];

  //remove comments, which are indicated by [...]

  const newick = newickString.replace(/\[(.*?)\]/gims, "");

  // translate the taxon labels in the Newick string
  const translatedNewickString = newick.replace(
    /([^:\,\(\)]+)/gims,
    (match) => {
      //console.log(translations[match])
      return translations[match] || match;
    }
  );

  return translatedNewickString;
}

export default nexusToNewick;
