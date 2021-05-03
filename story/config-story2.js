var config = {
    style: 'mapbox://styles/mikelmaron/ckiis912v087219qqo3hf2nuz/',
    accessToken: 'pk.eyJ1IjoibWlrZWxtYXJvbiIsImEiOiJjaWZlY25lZGQ2cTJjc2trbmdiZDdjYjllIn0.Wx1n0X7aeCQyDTnK6_mrGw',
    showMarkers: false,
    theme: 'dark',
    title: 'Unicef Giga: Kazakhstan',
    subtitle: 'Accessibility analysis of connected schools',
    byline: '',
    footer: 'Source: ',
    use3dTerrain: true,
    chapters: [
        {
            id: 'quschoqy',
            alignment: 'left',
            title: 'Kazakhstan',
            description: 'This school serves Quschoqy, Kazakhstan.',
            location: {
                center: [73.401571,50.230271],
                zoom: 16.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'schools-dots',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
            id: 'kazakhstan-schools',
            alignment: 'left',
            title: 'Schools',
            description: 'There at 7,410 schools in Kazakhstan',
            location: {
                center: [73.41872,50.23002],
                zoom: 4.5,
                pitch: 0,
                bearing: 0.00,
                duration: 8000
            },
            mapAnimation: 'easeTo',
            onChapterEnter: [
                          {
                            layer: 'schools-glow',
                            opacity: 0
                          }
            ],
            onChapterExit: []
        },
        {
            id: 'schools-connectivity',
            alignment: 'left',
            title: 'School Connectivity',
            image: '',
            description: 'Internet access at each school varies. The yellow schools have good connections, the purple have little or none, and the orange are somewhere in between.',
            location: {
                center: [65.12,48.39],
                zoom: 4.5,
                pitch: 4.00,
                bearing: 0.00,
                duration: 8000
            },
            onChapterEnter: [
              {
                layer: 'schools-glow',
                opacity: .75,
                duration: 1000
              },
              {
                layer: 'kz30-high',
                opacity: 0
              },
              {
                layer: 'kz30-med',
                opacity: 0
              },
              {
                layer: 'kz30-low',
                opacity: 0
              },
            ],
            onChapterExit: []
        },
        {
            id: 'schools-accessibility',
            alignment: 'left',
            title: 'Schools Accessibility',
            image: '',
            description: 'When a school is connected, it can be used by more than just teachers and students. After school hours, wifi can be used by the community. Using this map, we can start to see, for example, how much of the country is within a 30 minute drive of a school. ',
            location: {
                center: [69.007,43.112],
                zoom: 8,
                pitch: 28,
                bearing: 20,
                duration: 8000
            },
            onChapterEnter: [
              {
                layer: 'kz30-high',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'kz30-med',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'kz30-low',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'schools-glow',
                opacity: 0,
                duration: 1000
              },
            ],
            onChapterExit: []
        },
        {
            id: 'schools-population',
            alignment: 'left',
            title: 'Population by Connectivity',
            image: '',
            description: 'Then we can overlay this map with population data and start to see how many people have access to this level of connectivity. Remember, that we’re defining access as being within a 30 minute drive of a connected school. We found: <b>14.78 million people with high connectivity, 932k with only medium, and 40.5k with only low connectivity school access</b> leaving ~3m people without connectivity as defined by a 30 minute drive.',
            location: {
              center: [65.12,48.39],
              zoom: 4.5,
              pitch: 4.00,
              bearing: 0.00,
              duration: 8000
            },
            onChapterEnter: [
              { /* not sure this adds much at this zoom level*/
                layer: 'pop-extrusion',
                opacity: 1,
                duration: 1000
              },
              {
                layer: 'schools-glow',
                opacity: 0,
                duration: 1000
              },
              {
                layer: 'kz30-high',
                opacity: 0,
                duration: 1000
              },
              {
                layer: 'kz30-med',
                opacity: 0,
                duration: 1000
              },
              {
                layer: 'kz30-low',
                opacity: 0,
                duration: 1000
              },
              {
                /* these labels make it hard to read */
                layer: 'place-label (3) copy',
                opacity: .6,
              }
            ],
            onChapterExit: [
              {
                layer: 'pop-extrusion',
                opacity: 0
              },
              {
                /* these labels make it hard to read, and shouldn't be under the isochrones */
                layer: 'place-label (3) copy',
                opacity: 0.9,
              },
              {
                layer: 'kz30-high',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'kz30-med',
                opacity: .8,
                duration: 1000
              },
              {
                layer: 'kz30-low',
                opacity: .8,
                duration: 1000
              }
            ]
        },
        {
            id: 'economic',
            alignment: 'left',
            title: 'Economic',
            image: '',
            description: 'We can also overlay this with other data to see how connectivity interacts with important socioeconomic indicators.',
            location: {
              center: [65.12,48.39],
              zoom: 4.5,
              pitch: 4.00,
              bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-facilities',
            alignment: 'left',
            title: 'Other facilities',
            image: '',
            description: 'We can also look at other facilities, like health centers, and see which ones are close enough to connect via mesh networks.',
            location: {
                center: [74.543,43.885],
                zoom: 6.5,
                pitch: 34,
                bearing: -26,
                duration: 8000
            },
            onChapterEnter: [
              {
                layer: 'kazakhstan-merged',
                opacity: .75
              }
            ],
            onChapterExit: [
              {
                layer: 'kazakhstan-merged',
                opacity: 0
              }
            ]
        },
        {
            id: 'explore',
            alignment: 'left',
            title: 'Explore',
            image: '',
            description: 'Go ahead, explore if you like! Just drag and zoom to go where you want.',
            location: {
              center: [65.12,48.39],
              zoom: 4.5,
              pitch: 4.00,
              bearing: 0.00
          },
            callback: 'enableFreetime',
            onChapterEnter: [
              {
                layer: 'kz30-low',
                opacity: .75
              },
              {
                layer: 'kz30-med',
                opacity: .75
              },
              {
                layer: 'kz30-high',
                opacity: .75
              }
            ],
            onChapterExit: [
            ]
        }
    ]
};
