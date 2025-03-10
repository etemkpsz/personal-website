import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 4rem;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding-right: 0;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 4px solid transparent;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(45deg, #FF6B6B, #4ECDC4) border-box;
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Introduction = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 3rem;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #636e72;
  line-height: 1.6;
  margin-bottom: 2rem;
  
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #FF6B6B20, transparent);
    margin-top: 2rem;
  }
`;

const BlogSection = styled.div`
  margin: 4rem 0;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BlogCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogTitle = styled.h3`
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

const BlogExcerpt = styled.p`
  color: #636e72;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillsSection = styled.div`
  margin: 4rem 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  h3 {
    color: #2d3436;
    margin: 1rem 0;
    font-size: 1.2rem;
  }
  
  .icon {
    font-size: 2.5rem;
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const ProjectsSection = styled.div`
  margin: 4rem 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.a)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  
  .project-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(45deg, #FF6B6B20, #4ECDC420);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  
  h3 {
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
  }
  
  p {
    color: #636e72;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    flex: 1;
  }
  
  .tech-stack {
    margin-top: auto;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  
  .tech-tag {
    background: linear-gradient(45deg, #FF6B6B20, #4ECDC420);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    color: #2d3436;
  }
`;

const blogPosts = [
  {
    id: 1,
    title: "İlk Blog Yazım",
    excerpt: "Merhaba! Bu benim ilk blog yazım. Burada teknoloji ve yazılım hakkında düşüncelerimi paylaşacağım.",
  },
  {
    id: 2,
    title: "React ile Modern Web Geliştirme",
    excerpt: "Modern web geliştirme araçları ve React'in sunduğu avantajlar hakkında detaylı bir inceleme.",
  },
  {
    id: 3,
    title: "Yazılım Dünyasında Yeni Trendler",
    excerpt: "2024 yılında öne çıkan yazılım trendleri ve gelecekte bizi neler bekliyor?",
  },
];

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "📜" },
  { name: "HTML & CSS", icon: "🎨" },
  { name: "Node.js", icon: "🚀" },
  { name: "Git", icon: "📚" },
  { name: "Responsive Design", icon: "📱" },
];

const projects = [
  {
    title: "E-Ticaret Platformu",
    description: "Modern bir e-ticaret platformu. Kullanıcı dostu arayüz ve gelişmiş filtreleme özellikleri ile alışveriş deneyimini kolaylaştırır.",
    icon: "🛍️",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "https://github.com"
  },
  {
    title: "Task Yönetim Uygulaması",
    description: "Takımlar için geliştirilmiş, gerçek zamanlı task yönetim uygulaması. Projelerinizi ve görevlerinizi kolayca organize edin.",
    icon: "✅",
    techStack: ["React", "Firebase", "Material-UI"],
    link: "https://github.com"
  },
  {
    title: "Sosyal Medya Dashboard",
    description: "Tüm sosyal medya hesaplarınızı tek bir panelden yönetebileceğiniz modern dashboard uygulaması. Analitikler ve içerik yönetimi bir arada.",
    icon: "📊",
    techStack: ["React", "Redux", "TailwindCSS"],
    link: "https://github.com"
  }
];

const Home = () => {
  return (
    <Container>
      <Hero>
        <ProfileImage
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
          alt="Profil"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <Introduction>
          <Title>Merhaba, Ben Etem Kapısız</Title>
          <Description>
            Fullstack geliştirici olarak modern web teknolojileri üzerinde çalışıyorum.
            React, Node.js ve veritabanı teknolojileri konularında tutkulu bir yazılımcıyım.
            Bu blogda deneyimlerimi ve öğrendiklerimi paylaşıyorum.
          </Description>
        </Introduction>
      </Hero>

      <BlogSection>
        <SectionTitle>Blog Yazılarım</SectionTitle>
        <BlogGrid>
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
              <BlogCard
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              </BlogCard>
            </Link>
          ))}
        </BlogGrid>
      </BlogSection>

      <ProjectsSection>
        <SectionTitle>Projelerim</SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                {project.icon}
              </div>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsSection>

      <SkillsSection>
        <SectionTitle>Yeteneklerim</SectionTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsSection>
    </Container>
  );
};

export default Home; 