const mockedApiResponse = {
  page: 1,
  total_pages: 993,
  total_results: 19845,
  results: [
    {
      id: 353081,
      original_title: 'Mission: Impossible - Fallout',
      poster_path: '/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
      original_language: 'en',
      overview:
        'When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
      release_date: '2018-07-25'
    },
    {
      id: 299536,
      original_title: 'Avengers: Infinity War',
      poster_path: '/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
      original_language: 'en',
      overview:
        'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
      release_date: '2018-04-25'
    }
  ]
}

const expectedUseCaseResponse = {
  page: 1,
  totalPages: 993,
  totalResults: 19845,
  movies: [
    {
      id: 353081,
      title: 'Mission: Impossible - Fallout',
      overview:
        'When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfil his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.',
      language: 'en',
      release: '2018-07-25',
      posterPath:
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg'
    },
    {
      id: 299536,
      title: 'Avengers: Infinity War',
      overview:
        'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.',
      language: 'en',
      release: '2018-04-25',
      posterPath:
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'
    }
  ]
}

const mockedApiResponsePage5 = {
  page: 5,
  total_pages: 993,
  total_results: 19845,
  results: [
    {
      id: 89,
      original_title: 'Indiana Jones and the Last Crusade',
      original_language: 'en',
      overview:
        "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
      poster_path: '/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg',
      release_date: '1989-05-24'
    },
    {
      id: 87,
      original_title: 'Indiana Jones and the Temple of Doom',
      original_language: 'en',
      overview:
        'After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees – and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.',
      poster_path: '/f2nTRKk2zGdUTE7tLJ5EGGSuKA6.jpg',
      release_date: '1984-05-23'
    }
  ]
}

const expectedUseCaseResponsePage5 = {
  page: 5,
  totalPages: 993,
  totalResults: 19845,
  movies: [
    {
      id: 89,
      language: 'en',
      overview:
        "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
      posterPath:
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg',
      release: '1989-05-24',
      title: 'Indiana Jones and the Last Crusade'
    },
    {
      id: 87,
      language: 'en',
      overview:
        'After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees – and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.',
      posterPath:
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/f2nTRKk2zGdUTE7tLJ5EGGSuKA6.jpg',
      release: '1984-05-23',
      title: 'Indiana Jones and the Temple of Doom'
    }
  ]
}

export {
  mockedApiResponse,
  mockedApiResponsePage5,
  expectedUseCaseResponse,
  expectedUseCaseResponsePage5
}