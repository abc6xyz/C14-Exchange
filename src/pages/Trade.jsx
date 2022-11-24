import './Trade.css';

import {
  ContentCenter,
  ContentRight,
  Dropdown,
  Search,
  Section,
  SectionTitle,
  TabTrade,
  TableAssets,
  TableRecentTransactions,
} from '../components';
import ReactApexChart from 'react-apexcharts';
import {Table} from '../components';
import {CircleProgress} from 'react-gradient-progress'
import useAssets from '../hooks/useAssets';
import { AssetsContext } from '../contexts/AssetsContext';
import useCombineSearchFilter from '../hooks/useCombineSearchFilter';
import { useContext } from 'react';
import useFilter from '../hooks/useFilter';
import useMediaQuery from '../hooks/useMediaQuery';
import useSearch from '../hooks/useSearch';

const ASSET_OPTIONS = ['All assets', 'Watchlist'];

const Trade = () => {
  const isWidthMin1150 = useMediaQuery('(min-width: 1150px)');
  const isWidthMin800 = useMediaQuery('(min-width: 800px)');
  const { allCoins } = useContext(AssetsContext);

  const { searchResult, searchInput, handleSearch } = useSearch(allCoins);
  const { filterResult, filterInput, handleFilter } = useFilter(
    allCoins,
    'All assets'
  );
  const { searchFilterResult } = useCombineSearchFilter(
    searchResult,
    filterResult,
    'symbol'
  );
  
  const abcd = allCoins[0];
  abcd.name = 'C14 Token';
  abcd.symbol = 'C14';
  abcd.icon = 'https://imgur.com/Cz7cT2x.png';
  abcd.price_eur = 10.34;
  const efgh = allCoins[1];
  efgh.name = 'C14_Water Token';
  efgh.symbol = 'C14W';
  efgh.icon = 'https://imgur.com/Cz7cT2x.png';
  
  const assetsInTable = searchInput || filterInput !== 'All assets' ? searchFilterResult : [allCoins[0], allCoins[1]];

  const watchlistQuery = (asset) => asset.onWatchlist;

const state = {
          
            series: [{
              data: [{
                x: new Date(1538778600000), 
                  y: [7.81,7.5,8.04, 7.33]
                },
                {
                  x: new Date(1538780400000),
                  y: [7.21,8.59, 8.95,8.11]
                },
                {
                  x: new Date(1538782200000),
                  y: [8.21, 9.95,7.34,8.65]
                },
                                {
                  x: new Date(1538784000000),
                  y: [8.65, 9, 9.67, 9.24]
                },
                {
                  x: new Date(1538785800000),
                  y: [9.24, 10, 10.34, 10.47]
                },
                {
                  x: new Date(1538787600000),
                  y: [10.53, 11.03, 11.68, 11.31]
                },
                {
                  x: new Date(1538789400000),
                  y: [11.61, 10.59, 10.79, 10.89]
                },
                {
                  x: new Date(1538791200000),
                  y: [10.89, 10.62, 10.22, 10.32]
                },
                {
                  x: new Date(1538793000000),
                  y: [9.93,10.35,9.21, 10.12]
                },
                {
                  x: new Date(1538794800000),
                  y: [10.2, 10.2, 9.06, 9.32]
                },
                {
                  x: new Date(1538796600000),
                  y: [9.02, 9.68, 9.99, 9.91]
                },
                {
                  x: new Date(1538798400000),
                  y: [8.99, 8.91, 9.71, 9.31]
                },
                {
                  x: new Date(1538800200000),
                  y: [10, 9.61, 10.33, 10.12]
                },
                {
                  x: new Date(1538802000000),
                  y: [10.12, 9.91, 10.33, 11.12]
                },
                {
                  x: new Date(1538803800000),
                  y: [11, 10.61, 10.33, 10.88]
                },
                {
                  x: new Date(1538805600000),
                  y: [10.33, 9.61, 10.79, 10.58]
                },
                {
                  x: new Date(1538807400000),
                  y:[9.61, 10.38, 10.08, 9.12]
                },
                {
                  x: new Date(1538809200000),
                  y: [10.12, 10.79, 9.33, 10.33]
                },
                {
                  x: new Date(1538811000000),
                  y: [10.53, 11.03, 11.68, 11.31]
                },
                {
                  x: new Date(1538812800000),
                  y: [10.33, 9.61, 10.79, 10.58]
                },
                {
                  x: new Date(1538814600000),
                  y: [11, 10.61, 10.33, 10.88]
                },
                {
                  x: new Date(1538816400000),
                  y: [11.61, 10.59, 10.79, 10.89] },
                {
                  x: new Date(1538818200000),
                  y:  [11, 10.21, 10.33, 10.58]
                },
                {
                  x: new Date(1538820000000),
                  y: [10.12, 10.79, 9.33, 10.33]
                },
                {
                  x: new Date(1538821800000),
                  y: [10.53, 11.03, 11.68, 11.31]
                },
                {
                  x: new Date(1538823600000),
                  y:[10.33, 9.61, 10.79, 10.58]
                },
                {
                  x: new Date(1538825400000),
                  y: [10.53, 11.03, 11.68, 11.31]
                },
                {
                  x: new Date(1538827200000),
                  y: [11.61, 10.59, 10.79, 10.89] 
                },
                {
                  x: new Date(1538829000000),
                  y: [10.67, 9.03, 11.68, 10.98]
                },
                {
                  x: new Date(1538830800000),
                  y: [10.33, 9.61, 10.79, 10.58]
                },
                {
                  x: new Date(1538832600000),
                  y: [10.24, 10, 10.34, 10.47]
                },
                {
                  x: new Date(1538834400000),
                  y: [10, 9.61, 10.33, 10.12]
                },
                {
                  x: new Date(1538836200000),
                  y: [9.65, 9.1, 9.87, 9.74]
                },
                {
                  x: new Date(1538838000000),
                  y:[9.95, 10.42,9.1,9.24]
                },
                {
                  x: new Date(1538839800000),
                  y: [9.30, 10.52, 8.72, 10.22]
                },
                {
                  x: new Date(1538841600000),
                  y: [10.33, 9.61, 10.79, 10.58]
                },
                {
                  x: new Date(1538843400000),
                  y: [10.61, 10.61, 10.33, 10.88]
                },
                {
                  x: new Date(1538845200000),
                  y: [10.67, 9.03, 11.68, 10.98]
                },
                {
                  x: new Date(1538847000000),
                  y: [11, 10.69, 11.28, 11.31]
                },
                {
                  x: new Date(1538848800000),
                  y: [11.61, 10.59, 10.79, 10.89]
                },
                {
                  x: new Date(1538850600000),
                  y: [10.53, 11.03, 11.68, 11.31]
                },
                {
                  x: new Date(1538852400000),
                  y: [10.33, 9.61, 10.79, 10.58]
                },
                {
                  x: new Date(1538854200000),
                  y:  [10.08, 9.54, 10.54, 10.21]
                },
                {
                  x: new Date(1538856000000),
                  y: [10.12, 10.79, 9.33, 10.33]
                },
                {
                  x: new Date(1538857800000),
                  y: [11, 10.21, 10.33, 10.58]
                },
                {
                  x: new Date(1538859600000),
                  y: [10.33, 9.61, 10.79, 10.58]
                },
                {
                  x: new Date(1538861400000),
                  y: [10.53, 11.03, 11.68, 11.31]
                },
                {
                  x: new Date(1538863200000),
                  y: [11.13, 11.03, 11.68, 11.61]
                },
                {
                  x: new Date(1538865000000),
                  y: [10.33, 9.61, 10.79, 10.58]
                },
                {
                  x: new Date(1538866800000),
                  y: [10.58, 10.21, 10.33, 11]
                },
                {
                  x: new Date(1538868600000),
                  y: [11.61, 10.59, 10.79, 10.89]
                },
                {
                  x: new Date(1538870400000),
                  y: [10.98, 9.61, 10.33, 11.12]
                },
                {
                  x: new Date(1538872200000),
                  y: [10, 9.61, 10.33, 10.12]
                },
                {
                  x: new Date(1538874000000),
                  y:[10.12, 9.91, 10.33, 11.12]
                },
                {
                  x: new Date(1538875800000),
                  y:[11.11, 11.59, 10.49, 10.85]
                },
                {
                  x: new Date(1538877600000),
                  y: [10.85, 10.45, 10.18, 10.73]
                },
                {
                  x: new Date(1538879400000),
                  y: [10.5, 9.61, 10.93, 10.72]
                },
                {
                  x: new Date(1538881200000),
                  y: [10.33, 9.61, 10.79, 10.58]
                },
                {
                  x: new Date(1538883000000),
                  y: [10.12, 10.79, 9.33, 10.33]
                },
                {
                  x: new Date(1538884800000),
                  y:  [10.24, 9.78, 10.64, 10.47]
                },
                {
                  x: new Date(1538886600000),
                  y: [10.53, 11.03, 11.68, 11.31]
                },
              ]
            }],
            options: {
              chart: {
                type: 'candlestick',
                height: 350
              },
              // title: {
              //   text: 'CandleStick Chart',
              //   align: 'left'
              // },
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                tooltip: {
                  enabled: true
                }
              }
            },          
};

const x = useAssets().x;
const str = "YAY! You've become " + x + "% Green by using C14."
return (
    <>
      <ContentCenter>
        <Section>
          <SectionTitle title='C14/EUR' noBorderBottom/>
            <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="candlestick" height={350} />
            </div>
        </Section>
        <Section>
          <SectionTitle title='All Assets' noBorderBottom />
          <div className='trade__searchFilterRow'>
            <Search
              searchInput={searchInput}
              handleSearch={handleSearch}
              allItems={allCoins}
            />
            {isWidthMin800 && (
              <div className='trade__filters'>
                <Dropdown
                  name='assetOptions'
                  options={ASSET_OPTIONS}
                  value={filterInput}
                  onChange={(e) => handleFilter(e, allCoins, watchlistQuery)}
                />
              </div>
            )}
          </div>
          <TableAssets assets={assetsInTable} />
        </Section>
          <Section>
            <SectionTitle title={str}/>
            <center><CircleProgress percentage={x} strokeWidth={18} primaryColor = { [ '#29e6a7','#4F7942'] }/></center>
        </Section>
      </ContentCenter>
      <ContentRight>
        <Section>
          <SectionTitle title='Order Book' noBorderBottom/>
          <Table>
        <tr>
          <th>Price</th>
          <th>Amount</th>
          <th>Total</th>
        </tr>
        <tr>
          <td style={{color: 'red', fontWeight: 'bold'}}>10.41</td>
          <td>500</td>
          <td>5,170</td>
        </tr>
        <tr>
          <td style={{color: 'red', fontWeight: 'bold'}}>10.37</td>
          <td>100</td>
          <td>1037</td>
        </tr>
        <tr>
          <td style={{color: 'red', fontWeight: 'bold'}}>10.34</td>
          <td>25</td>
          <td>258.5</td>
        </tr>
        <span style={{ fontWeight: 'bold', fontSize: '40px' }}>
        <center><td>€10.34</td></center>
        </span>
        <tr>
          <td style={{color: 'green', fontWeight: 'bold'}}>10.32</td>
          <td>500</td>
          <td>5,170</td>
        </tr>
        <tr>
          <td style={{color: 'green', fontWeight: 'bold'}}>10.28</td>
          <td>100</td>
          <td>1037</td>
        </tr>
        <tr>
          <td style={{color: 'green', fontWeight: 'bold'}}>10.22</td>
          <td>25</td>
          <td>258.5</td>
        </tr>

          </Table>
        <SectionTitle title='' noBorderBottom/>
        </Section>
        {isWidthMin1150 && (
          <Section>
            <TabTrade />
          </Section>
        )}
        <Section>
          <SectionTitle title='Recent transactions' />
          <TableRecentTransactions />
        </Section>
      </ContentRight>
    </>
  );
};

export default Trade;
