import styled from '@emotion/styled';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #636e72;
  text-decoration: none;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  
  &:hover {
    color: #2d3436;
  }
`;

const Article = styled(motion.article)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2d3436;
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  color: #636e72;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const Date = styled.div`
  color: #b2bec3;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

// Örnek blog verileri (gerçek uygulamada bir API'den gelecek)
const blogPosts = {
  1: {
    title: "İlk Blog Yazım",
    date: "9 Ocak 2024",
    content: `
      Merhaba! Bu benim ilk blog yazım. Burada teknoloji ve yazılım hakkında düşüncelerimi paylaşacağım.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `
  },
  2: {
    title: "React ile Modern Web Geliştirme",
    date: "10 Ocak 2024",
    content: `
      Modern web geliştirme araçları ve React'in sunduğu avantajlar hakkında detaylı bir inceleme.
      
      React, kullanıcı arayüzü geliştirmek için kullanılan açık kaynaklı bir JavaScript kütüphanesidir. Facebook tarafından geliştirilmiş ve sürdürülmektedir.
      
      Component-based yapısı, Virtual DOM kullanımı ve geniş ekosistemi ile modern web uygulamaları geliştirmek için mükemmel bir seçenektir.
    `
  },
  3: {
    title: "Yazılım Dünyasında Yeni Trendler",
    date: "11 Ocak 2024",
    content: `
      2024 yılında öne çıkan yazılım trendleri ve gelecekte bizi neler bekliyor?
      
      Yapay zeka ve makine öğrenimi, blockchain teknolojileri, serverless mimari ve mikroservisler gibi konular gündemde.
      
      Bu teknolojilerin gelişimi ile birlikte yazılım dünyası sürekli evrim geçiriyor ve yeni fırsatlar ortaya çıkıyor.
    `
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id];

  if (!post) {
    return <Container>Blog yazısı bulunamadı.</Container>;
  }

  return (
    <Container>
      <BackButton to="/">← Ana Sayfaya Dön</BackButton>
      
      <Article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>{post.title}</Title>
        <Date>{post.date}</Date>
        <Content>
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '1rem' }}>
              {paragraph}
            </p>
          ))}
        </Content>
      </Article>
    </Container>
  );
};

export default BlogPost; 