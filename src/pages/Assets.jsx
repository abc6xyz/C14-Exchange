/* eslint-disable no-const-assign */
import {
  ChartPortfolio,
  ContentCenter,
  ContentRight,
  Section,
  SectionTitle,
  TabTrade,
  TableAssets,
  TableYourAssets,
} from '../components';

import { AssetsContext } from '../contexts/AssetsContext';
import { useContext } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import useAssets from '../hooks/useAssets';
import {CircleProgress} from 'react-gradient-progress'

const Assets = () => {
  const isWidthMin1150 = useMediaQuery('(min-width: 1150px)');
  const { yourCoins, coinsOnWatchlist } = useContext(AssetsContext);
  // console.log(yourCoins[0].id);
  // if (yourCoins[0].id === "Qwsogvtv82FCd") {
  //   yourCoins[0].name = 'C14 Token';
  //   yourCoins[0].symbol = 'C14';
  //   yourCoins[0].icon = 'https://imgur.com/Cz7cT2x.png';
  // }
  const x = useAssets().x;
  const str = "You've become " + x + "% Green by using C14."
  return (
    <>
      <ContentCenter>
        <Section>
          <ChartPortfolio assets={yourCoins} />
        </Section>
        <Section>
          <SectionTitle title='Your Assets' />
          <TableYourAssets assets={yourCoins} />
        </Section>
        <Section>
          <SectionTitle title='Watchlist' />
          <TableAssets assets={coinsOnWatchlist} />
        </Section>
      </ContentCenter>
      {isWidthMin1150 && (
        <ContentRight>
          <Section>
            <SectionTitle title={str}/>
            <center><CircleProgress percentage={x} strokeWidth={18} primaryColor = { [ '#29e6a7','#4F7942'] }/></center>
        </Section>
          <Section>
            <TabTrade />
          </Section>
        </ContentRight>
      )}
    </>
  );
};

export default Assets;
