import {
  ContentCenter,
  ContentRight,
  Section,
  SectionTitle,
  TabDeposit,
  TableFiatTransfers, 
  Table
} from '../components';

import useMediaQuery from '../hooks/useMediaQuery';

const Rating = () => {
  const isWidthMax1150 = useMediaQuery('(max-width: 1150px)');
  const isWidthMin800 = useMediaQuery('(min-width: 800px)');

  return (
    <>
    <Section>
      <SectionTitle title='All Assets' noBorderBottom />
        <Table>
        <tr>
          <th>Project Name</th>
          <th>Price (in EUR)</th>
          <th>Volume</th>
        </tr>
        <tr>
          <td style={{color: 'green', fontWeight: 'bold'}}>Jharkhand Carbon Offsets</td>
          <td>5</td>
          <td>5,170</td>
        </tr>
        <tr>
<td style={{color: 'green', fontWeight: 'bold'}}>Jhabua Carbon Offsets</td>
          <td>9</td>
          <td>9,570</td>
        </tr>
        <tr>
          <td style={{color: 'green', fontWeight: 'bold'}}>Zimbabwe Forestry Project</td>
          <td>11.53</td>
          <td>10,000</td>
        </tr>
        <tr>
<td style={{color: 'green', fontWeight: 'bold'}}>Nigeria Forestry Project</td>
          <td>11.53</td>
          <td>10,000</td>
        </tr>
        <tr>
<td style={{color: 'green', fontWeight: 'bold'}}>USA Solar Power Project</td>
          <td>11.53</td>
          <td>10,000</td>
        </tr>
        </Table>
    </Section>
    </>
  );
};

export default Rating;
