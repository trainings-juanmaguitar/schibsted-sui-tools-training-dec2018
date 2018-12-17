const mockedApiResponse = {
  page: 1,
  total_results: 19797,
  total_pages: 990,
  results: [
    {
      id: 353081,
      original_title: "Mission: Impossible - Fallout",
      posterPath: "/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
      original_language: "en",
      overview:
        "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
      release_date: "2018-07-25"
    },
    {
      id: 299536,
      original_title: "Avengers: Infinity War",
      posterPath: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      original_language: "en",
      overview:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      release_date: "2018-04-25"
    }
  ]
}

const expectedUseCaseResponse = [
  {
    id: 353081,
    title: "Mission: Impossible - Fallout",
    overview:
      "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
    language: "en",
    release: "2018-07-25",
    posterPath:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg"
  },
  {
    id: 299536,
    title: "Avengers: Infinity War",
    overview:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    language: "en",
    release: "2018-04-25",
    posterPath:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
  }
]

export {mockedApiResponse, expectedUseCaseResponse}