class Wallet {
  constructor(money){
    const thisWallet = this;
    let _money = money;

    //pobieranie aktualnej zawartości portfela
    thisWallet.getWalletValue = function() {
      return _money;
    };

    thisWallet.canPlay = function(value) {
      if (_money >= value) {
        return true;
      } else {
        return false;
      }
    };

    thisWallet.changeWallet = function(value, type = '+') {
      if (typeof value === 'number' && !isNaN(value)) {
        if (type === '+') {
          return _money += value;
        } else if (type === '-') {
          return _money -= value;
        } else {
          throw new Error('nieprawidłowy typ działania');
        }
      } else {
        console.log(typeof value);
        throw new Error('nieprawidłowy typ danych');
      }
    };
  }
}
// eslint-disable-next-line no-undef
//const wallet = new Wallet(200);

