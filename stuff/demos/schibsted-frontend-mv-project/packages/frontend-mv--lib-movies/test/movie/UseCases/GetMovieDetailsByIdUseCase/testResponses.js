const mockedApiResponse = {
  id: 353081,
  original_title: 'Mission: Impossible - Fallout',
  posterPath: '/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
  original_language: 'en',
  overview:
    'When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
  release_date: '2018-07-25'
}

const expectedUseCaseResponse = {
  id: 353081,
  title: 'Mission: Impossible - Fallout',
  overview:
    'When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
  language: 'en',
  release: '2018-07-25',
  posterPath:
    'https://image.tmdb.org/t/p/w300_and_h450_bestv2/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg'
}

export {mockedApiResponse, expectedUseCaseResponse}
