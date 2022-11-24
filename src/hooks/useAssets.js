import useGetCoins from './useGetCoins';
import useGetFiat from './useGetFiat';

const useAssets = () => {
  const { coins } = useGetCoins();
  const { fiat } = useGetFiat();

  const allCoins = coins.sort(
    (prev, next) => next.market_cap - prev.market_cap
  );

  const yourCoins = coins
    .filter((asset) => asset.balance_coin > 0)
    .sort((prev, next) => next.balance_eur - prev.balance_eur);

  var x = 1;
  if (yourCoins[0] !== undefined) {
    if (yourCoins[0].id === "Qwsogvtv82FCd") {
    yourCoins[0].name = 'C14 Token';
    yourCoins[0].symbol = 'C14';
    yourCoins[0].icon = 'https://imgur.com/Cz7cT2x.png';
    yourCoins[0].price_eur = 10.34;
    yourCoins[1].name = 'C14_Water Token';
    yourCoins[1].symbol = 'C14W';
    yourCoins[1].icon = 'https://imgur.com/Cz7cT2x.png';
    
    }    
     x = (yourCoins[0].balance_eur/250000 - 5).toFixed(2);
  } 
  const coinsOnWatchlist = coins
    .filter((asset) => asset.onWatchlist)
    .sort((prev, next) => next.market_cap - prev.market_cap);

  const allFiat = fiat.sort(
    (prev, next) => next.balance_eur - prev.balance_eur
  );

  return { x, allCoins, yourCoins, coinsOnWatchlist, allFiat };
};

export default useAssets;
