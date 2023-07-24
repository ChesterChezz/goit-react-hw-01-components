import PropTypes from 'prop-types';

import {
  Section,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled.jsx';

const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>Upload stats</Title>}
      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{
              backgroundColor: `#${Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, '0')}`,
            }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Statistics;
