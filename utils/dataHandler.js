import data from "./data.json";

let cards = data;

function comparatorRandom() {
  return Math.random() - 0.5;
}
if (cards) {
  cards = cards.sort(comparatorRandom);
  console.log(cards);
}

const getCard = () => {
  if (cards) {
    return cards.shift();
  }
  return null;
};

export { getCard };
