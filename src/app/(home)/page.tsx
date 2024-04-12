import { items as bannersMock } from 'components/BannerSlider/mock';
import { items as gamesMock } from 'components/GameCardSlider/mock';
import { item as highlightMock } from 'components/Highlight/mock';
import { Home, HomeTemplateProps } from 'templates/Home';

async function getList() {
  return {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcommingGames: gamesMock,
    upcommingHighligth: highlightMock,
    upcommingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighligth: highlightMock,
  };
}

export default async function Index() {
  const props = (await getList()) as HomeTemplateProps;

  return (
    <div>
      <Home {...props} />
    </div>
  );
}
