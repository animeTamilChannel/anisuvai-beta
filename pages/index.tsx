import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import NavTabs from '../components/NavTabs';
import Carousel from '../components/Carousel';
import FooterNav from '../components/FooterNav';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>MagicFlix</title>
        <meta name="description" content="Premium Streaming Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="pt-16 pb-20 px-4">
        <Hero />
        <NavTabs />
        <Carousel
          title="Continue Watching"
          items={[
            { image: '/images/continue1.jpg', progress: 65, label: '65% watched' },
            { image: '/images/continue2.jpg', progress: 30, label: '30% watched' },
            { image: '/images/continue3.jpg', progress: 85, label: '85% watched' },
            { image: '/images/continue4.jpg', progress: 15, label: '15% watched' },
          ]}
          showProgress
        />
        <Carousel
          title="Popular on MagicFlix"
          items={[
            { image: '/images/popular1.jpg' },
            { image: '/images/popular2.jpg' },
            { image: '/images/popular3.jpg' },
            { image: '/images/popular4.jpg' },
          ]}
        />
        <Carousel
          title="New Releases"
          items={[
            { image: '/images/new1.jpg', badge: 'NEW' },
            { image: '/images/new2.jpg', badge: 'NEW' },
            { image: '/images/new3.jpg', badge: 'NEW' },
            { image: '/images/new4.jpg', badge: 'NEW' },
          ]}
        />
        <Carousel
          title="Recommended For You"
          items={[
            { image: '/images/rec1.jpg' },
            { image: '/images/rec2.jpg' },
            { image: '/images/rec3.jpg' },
            { image: '/images/rec4.jpg' },
          ]}
        />
      </main>
      <FooterNav />
    </>
  );
};

export default HomePage;