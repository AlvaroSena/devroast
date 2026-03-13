export const MOCK_STATS = {
  totalCodesRoasted: 2847,
  avgScore: 4.2,
};

export const MOCK_LEADERBOARD = [
  {
    rank: 1,
    score: 1.2,
    code: 'function calculateTotal(items) { var total = 0; for (var i = 0; i < items.length; i++) { total += items[i].price; } return total; }',
    language: 'javascript',
  },
  {
    rank: 2,
    score: 1.8,
    code: 'const x = "1" + 1; console.log(x);',
    language: 'javascript',
  },
  {
    rank: 3,
    score: 2.1,
    code: 'eval("console.log(1)");',
    language: 'javascript',
  },
];
