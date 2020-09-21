class Game {
  constructor(start) {
    const thisGame = this;

    thisGame.stats = new Statistic();
    thisGame.wallet = new Wallet(start);
    document.getElementById('start').addEventListener('click', thisGame.startGame.bind(thisGame));
    thisGame.boards = document.querySelectorAll('div.color');
    thisGame.inputBid = document.getElementById('bid');
    thisGame.spanWallet = document.querySelector('.wallet')
    thisGame.spanResult = document.querySelector('.score span.result')
    thisGame.gameNumber = document.querySelector('.score span.number')
    thisGame.gameWin = document.querySelector('.score span.win')
    thisGame.gameLoss = document.querySelector('.score span.loss')

    thisGame.render()
  }

  render(colors = ['#eee', '#eee', '#eee'], money = this.wallet.getWalletValue(), stats = this.stats.showGameStatistic(), result = '', bid = 0, wonMoney = 0) {
    const thisGame = this;
    thisGame.boards.forEach(function(board, index) {
      board.style.backgroundColor = colors[index];
    });
    thisGame.spanWallet.textContent = money;
    if(result) {
      result = `Wygrałeś ${wonMoney}` + '$';
    } else if (!result && result !== '') {
      result = `Przegrałeś ${bid}` + '$';
    }
    thisGame.spanResult.textContent = result
    thisGame.gameNumber.textContent = stats[0]
    thisGame.gameWin.textContent = stats[1]
    thisGame.gameLoss.textContent = stats[2];
  }

  startGame() {
    const thisGame = this;

    if(thisGame.inputBid.value < 1) {
      return alert('Zbyta małą wartość zakładu')
    }
    let bid = Math.floor(game.inputBid.value)

    if(!thisGame.wallet.canPlay(bid)) {
      return alert('Nie masz wystarczających środków by grać dalej')
    }
    thisGame.wallet.changeWallet(bid, '-')

    thisGame.draw = new Draw()

    const colors = thisGame.draw.getDrawResult()

    const win = Result.checkWinner(colors)

    const wonMoney = Result.moneyWin(win, bid)

    thisGame.wallet.changeWallet(wonMoney)
    thisGame.stats.addGameToStatistic(win, bid)

    thisGame.render(colors, this.wallet.getWalletValue(), this.stats.showGameStatistic(), win, bid, wonMoney)


    //thisGame.render(colors)
  }
}



