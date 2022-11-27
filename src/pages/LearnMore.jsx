
import {
  Section,
  SectionTitle2,
  SectionTitle,
} from '../components';

const LearnMore = () => {
  return (
    <>
    <Section>
        <SectionTitle2 title='What is C14?' noBorderBottom 
        subtitle = 'C14 is an exchange for trading environmental commodities. We allow individuals to trade and invest in commodities like carbon offset in the form of C14 coins.'/>
        <SectionTitle title='What is a Carbon Offset?' noBorderBottom 
        subtitle = 'A carbon offset is a reduction or removal of emissions of carbon dioxide or other greenhouse gases made in order to compensate for emissions made elsewhere. One carbon offset represents the reduction or removal of 1,000 kg of carbon dioxide or its equivalent in other greenhouse gases.'/>
    <SectionTitle title='What is the difference between Carbon Offset and Carbon Credit?' noBorderBottom 
        subtitle = 'According to harmonyfuels.com, carbon credits stands for the right to emit that carbon, while the carbon offsets represent the production of a certain amount of sustainable energy to counterbalance the use of fossil fuels.'/>
    <SectionTitle title='Enough jargon. Tell me something interesting about the carbon offset prices.' noBorderBottom 
        subtitle = 'The current market size for carbon offsets is $2 bn. According to McKinsey report, The market size for voluntary carbon offsets could be worth upward of $50 billion in 2030.' link = 'https://www.mckinsey.com/featured-insights/future-of-asia/the-path-to-net-zero-investing-in-carbon-markets' link_name = 'McKinsey Report'/>
    <SectionTitle title='Interesting. Tell me more.' noBorderBottom 
        subtitle = 'According to Bloomberg, Carbon offsets price may rise 3,000% by 2029 under tighter rules.' link = 'https://www.bloomberg.com/professional/blog/carbon-offsets-price-may-rise-3000-by-2029-under-tighter-rules/' link_name = 'Bloomberg Report'/>
    </Section>
    </>
  );

};




export default LearnMore;