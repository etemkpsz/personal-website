import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  color: #2d3436;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #636e72;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #0984e3;
  }
`;

const FooterText = styled.p`
  color: #636e72;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const Copyright = styled.div`
  text-align: center;
  color: #636e72;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Hakkımda</FooterTitle>
          <FooterText>
            Frontend geliştirici olarak modern web teknolojileri üzerinde çalışıyorum.
            Bu blogda deneyimlerimi ve öğrendiklerimi paylaşıyorum.
          </FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Bağlantılar</FooterTitle>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/hakkimda">Hakkımda</FooterLink>
          <FooterLink href="/iletisim">İletişim</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Sosyal Medya</FooterTitle>
          <SocialLinks>
            <FooterLink href="https://github.com" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="github">📱</span> GitHub
            </FooterLink>
            <FooterLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="linkedin">💼</span> LinkedIn
            </FooterLink>
            <FooterLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="twitter">🐦</span> Twitter
            </FooterLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {new Date().getFullYear()} Etem Kapısız. Tüm hakları saklıdır.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 