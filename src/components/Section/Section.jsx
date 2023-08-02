import { SectionContainter, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionContainter>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainter>
  );
};

export default Section;
