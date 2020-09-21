class Statistic {
  constructor() {
    const thisStatistic = this;
    thisStatistic.gameResults = [];

  }
  addGameToStatistic(win, bid) {
    const thisStatistic = this
    let gameResult = {
      win: win,
      bid: bid,
    }
    thisStatistic.gameResults.push(gameResult)
  }

  showGameStatistic() {
    const thisStatistic = this;
    let games = thisStatistic.gameResults.length
    let wins = thisStatistic.gameResults.filter(function(result) { return result.win }).length
    let losses = thisStatistic.gameResults.filter(function(result) { return !result.win }).length

   return [games, wins, losses]
  }
}


