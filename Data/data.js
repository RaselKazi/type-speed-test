const wordBreak = (s, wordDict) => {
  if (wordDict == null || wordDict.length === 0) return false;
  const set = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const w = s.slice(start, end);
      if (dp[start] === true && set.has(w)) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
var wordBreakDp = function (s, wordDict) {
  var memo = [];
  var recur = function (index) {
    if (memo[index] != null) return memo[index];
    if (index == s.length) return true;
    for (let end = index + 1; end <= s.length; end++) {
      if (wordDict.includes(s.substring(index, end)) && recur(end)) {
        memo[index] = true;
        return true;
      } else {
        memo[index] = false;
      }
    }
    return false;
  };
  recur(0);
  return memo[0];
};
