const mockedApiResponse = {
  page: 1,
  total_results: 107,
  total_pages: 6,
  results: [
    {
      vote_count: 3357,
      id: 268,
      video: false,
      vote_average: 7.1,
      title: 'Batman',
      popularity: 13.151,
      poster_path: '/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg',
      original_language: 'en',
      original_title: 'Batman',
      genre_ids: [14, 28],
      backdrop_path: '/2blmxp2pr4BhwQr74AdCfwgfMOb.jpg',
      adult: false,
      overview:
        "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
      release_date: '1989-06-23'
    },
    {
      vote_count: 326,
      id: 2661,
      video: false,
      vote_average: 6.2,
      title: 'Batman',
      popularity: 5.826,
      poster_path: '/udDVJXtAFsQ8DimrXkVFqy4DGEQ.jpg',
      original_language: 'en',
      original_title: 'Batman',
      genre_ids: [10751, 12, 35, 878, 80],
      backdrop_path: '/5gcdof2PKH1emllBdN1VXU706IP.jpg',
      adult: false,
      overview:
        'The Dynamic Duo faces four super-villains who plan to hold the world for ransom with the help of a secret invention that instantly dehydrates people.',
      release_date: '1966-07-30'
    }
  ]
}

const expectedUseCaseResponse = [
  {
    id: 268,
    title: 'Batman',
    overview:
      "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker, who has seized control of Gotham's underworld.",
    language: 'en',
    releaseDate: '1989-06-23',
    posterPath:
      'https://image.tmdb.org/t/p/w300_and_h450_bestv2/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg'
  },
  {
    id: 2661,
    title: 'Batman',
    overview:
      'The Dynamic Duo faces four super-villains who plan to hold the world for ransom with the help of a secret invention that instantly dehydrates people.',
    language: 'en',
    releaseDate: '1966-07-30',
    posterPath:
      'https://image.tmdb.org/t/p/w300_and_h450_bestv2/udDVJXtAFsQ8DimrXkVFqy4DGEQ.jpg'
  }
]

export {mockedApiResponse, expectedUseCaseResponse}
