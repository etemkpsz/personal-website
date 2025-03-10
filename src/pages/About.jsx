import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #636e72;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2d3436;
  margin-bottom: 2rem;
  
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #FF6B6B, transparent);
    margin-top: 0.5rem;
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ExperienceCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const CompanyName = styled.h3`
  font-size: 1.8rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  color: transparent;
`;

const Position = styled.h4`
  font-size: 1.1rem;
  color: #636e72;
  margin-bottom: 1rem;
`;

const Duration = styled.div`
  display: inline-block;
  background: linear-gradient(45deg, #FF6B6B20, #4ECDC420);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: #2d3436;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #636e72;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const EducationCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const UniversityName = styled.h3`
  font-size: 1.8rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  color: transparent;
`;

const Department = styled.h4`
  font-size: 1.1rem;
  color: #636e72;
  margin-bottom: 1rem;
`;

const About = () => {
  return (
    <Container>
      <Header>
        <Title>Hakkımda</Title>
        <Subtitle>
          Yazılım geliştirme tutkusu ile başlayan yolculuğumda edindiğim deneyimleri ve öğrendiklerimi paylaşmaktan mutluluk duyuyorum.
        </Subtitle>
      </Header>

      <Section>
        <SectionTitle>Eğitim</SectionTitle>
        <EducationCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <UniversityName>İstanbul Bilgi Üniversitesi</UniversityName>
          <Department>Bilgisayar Mühendisliği</Department>
          <Duration>2019 - 2023</Duration>
          <Description>
            Modern yazılım geliştirme teknolojileri, veri yapıları, algoritmalar ve
            yazılım mühendisliği prensipleri üzerine kapsamlı eğitim aldım.
          </Description>
        </EducationCard>
      </Section>

      <Section>
        <SectionTitle>Deneyim</SectionTitle>
        <ExperienceGrid>
          <ExperienceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CompanyName>Insider</CompanyName>
            <Position>Frontend Developer</Position>
            <Duration>1 Yıl</Duration>
            <Description>
              Büyük ölçekli web uygulamaları geliştirme, performans optimizasyonu
              ve modern frontend teknolojileri konularında deneyim kazandım.
            </Description>
          </ExperienceCard>

          <ExperienceCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CompanyName>Karatsoft</CompanyName>
            <Position>Software Developer</Position>
            <Duration>6 Ay</Duration>
            <Description>
              Startup ekosisteminde çevik metodolojiler ile çalışarak yenilikçi
              projelerin geliştirilmesinde aktif rol aldım.
            </Description>
          </ExperienceCard>
        </ExperienceGrid>
      </Section>
    </Container>
  );
};

export default About; 