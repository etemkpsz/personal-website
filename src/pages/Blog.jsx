import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled(motion.article)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogContent = styled.div`
  padding: 2rem;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  color: transparent;
`;

const BlogExcerpt = styled.p`
  color: #636e72;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const BlogDate = styled.span`
  color: #b2bec3;
  font-size: 0.9rem;
`;

const ReadMore = styled.span`
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 500;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const blogPosts = [
  {
    id: 1,
    title: "İlk Blog Yazım",
    excerpt: "Merhaba! Bu benim ilk blog yazım. Burada teknoloji ve yazılım hakkında düşüncelerimi paylaşacağım.",
    date: "9 Ocak 2024"
  },
  {
    id: 2,
    title: "React ile Modern Web Geliştirme",
    excerpt: "Modern web geliştirme araçları ve React'in sunduğu avantajlar hakkında detaylı bir inceleme.",
    date: "10 Ocak 2024"
  },
  {
    id: 3,
    title: "Yazılım Dünyasında Yeni Trendler",
    excerpt: "2024 yılında öne çıkan yazılım trendleri ve gelecekte bizi neler bekliyor?",
    date: "11 Ocak 2024"
  },
  {
    id: 4,
    title: "Frontend Geliştirici Olmak",
    excerpt: "Frontend geliştirici olma yolculuğum ve bu süreçte öğrendiklerim.",
    date: "12 Ocak 2024"
  },
  {
    id: 5,
    title: "Web Performans Optimizasyonu",
    excerpt: "Web uygulamalarında performans optimizasyonu için en iyi pratikler ve teknikler.",
    date: "13 Ocak 2024"
  },
  {
    id: 6,
    title: "Modern CSS Teknikleri",
    excerpt: "CSS'in modern özellikleri ve web tasarımında kullanım örnekleri.",
    date: "14 Ocak 2024"
  }
];

const Blog = () => {
  return (
    <Container>
      <Header>
        <Title>Blog Yazılarım</Title>
        <Subtitle>
          Yazılım geliştirme, web teknolojileri ve kişisel deneyimlerim hakkında düşüncelerimi paylaştığım blog yazıları.
        </Subtitle>
      </Header>

      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            as={Link}
            to={`/blog/${post.id}`}
            style={{ textDecoration: 'none' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <BlogMeta>
                <BlogDate>{post.date}</BlogDate>
                <ReadMore>Devamını Oku →</ReadMore>
              </BlogMeta>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </Container>
  );
};

export default Blog; 