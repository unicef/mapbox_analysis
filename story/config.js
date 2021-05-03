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
            id: 'kazakhstan',
            alignment: 'left',
            title: 'Kazakhstan',
            description: 'This is 1 school in exploratory analysis looks at what portion of the population of Kazakhstan has access to schools at each connectivity level.',
            location: {
                center: [65.12,48.39],
                zoom: 4.5,
                pitch: 4.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'schools-dots',
                opacity: 0
              },
              {
                layer: 'schools-glow',
                opacity: 0
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
            id: 'schools',
            alignment: 'left',
            title: 'Schools',
            image: '',
            description: 'There are 7410 total schools in Kazakhstan.',
            location: {
                center: [65.12,48.39],
                zoom: 4.5,
                pitch: 4.00,
                bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'schools-dots',
                opacity: 1
              },
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
            description: 'Of the 7,410 total schools, 4,195 have high connectivity (yellow, rated 7-10), 2,797 have medium connectivity (orange, rated 4-6), and 351 have low connectivity (purple, rated 0-3).<br/><sub><i>67 schools with no speed data</i></sub>',
            location: {
                center: [65.12,48.39],
                zoom: 4.5,
                pitch: 4.00,
                bearing: 0.00
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
            description: 'For each school, we calculated the area that can reach the school with a 30 minute drive, and created low, medium, and high connectivity catchment areas (shown in purple, orange, and yellow).',
            location: {
                center: [69.007,43.112],
                zoom: 8,
                pitch: 28,
                bearing: 20
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
              }
            ],
            onChapterExit: []
        },
        {
            id: 'city-mixed',
            alignment: 'left',
            title: 'Area with mixed connectivity',
            image: '',
            description: '',
            location: {
                center: [51.394,51.2218],
                zoom: 11.65,
                pitch: 25,
                bearing: 50
            },
            onChapterEnter: [
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
              {
                layer: 'schools-glow',
                opacity: 1
              }
            ],
            onChapterExit: []
        },
        {
          id: 'city-mixed-with-iso',
          alignment: 'left',
          title: 'Area with mixed connectivity',
          image: '',
          hidden: true,
          description: '',
          location: {
              center: [51.394,51.2218],
              zoom: 11.65,
              pitch: 25,
              bearing: 50
          },
          onChapterEnter: [
            {
              layer: 'schools-glow',
              opacity: .75
            },
            {
              layer: 'kz30-high',
              opacity: .20
            },
            {
              layer: 'kz30-med',
              opacity: .20
            },
            {
              layer: 'kz30-low',
              opacity: .20
            }
          ],
          onChapterExit: []
      },
        {
            id: 'isolated',
            alignment: 'left',
            title: 'An isolated village',
            image: '',
            description: '',
            location: {
                center: [66.6611,49.21422],
                zoom: 14,
                pitch: 26,
                bearing: -66.3
            },
            onChapterEnter: [
              {
                layer: 'kz30-high',
                opacity: 0
              },
              {
                layer: 'kz30-med',
                opacity: .40
              },
              {
                layer: 'kz30-low',
                opacity: 0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'spur',
            alignment: 'left',
            title: 'A low connectivity spur',
            image: '',
            description: '',
            location: {
                center: [68.209,44.1433],
                zoom: 11.5,
                pitch: 65,
                bearing: -77.2
            },
            onChapterEnter: [
              {
                layer: 'kz30-med',
                opacity: 0
              },
              {
                layer: 'kz30-low',
                opacity: .40
              }
            ],
            onChapterExit: []
        },
        {
            id: 'schools-population',
            alignment: 'left',
            title: 'Population by Connectivity',
            image: '',
            description: 'To determine how many people were served by each level of connectivity, we compared catchment areas to various population data sets. We found: <b>14.78 million people with high connectivity, 932k with only medium, and 40.5k with only low connectivity school access</b> leaving ~3m people without connectivity as defined by a 30 minute drive. <br/><sup>Using <a href="https://dataforgood.fb.com/docs/high-resolution-population-density-maps-demographic-estimates-documentation/">Facebook Population Density Data</a></sup>',
            location: {
                center: [67.999,52.453],
                zoom: 6.13,
                pitch: -27.2,
                bearing: 31
            },
            onChapterEnter: [
              { /* not sure this adds much at this zoom level*/
                layer: 'pop-extrusion',
                opacity: .75,
                duration: 1000
              },
              {
                layer: 'schools-glow',
                opacity: 0,
                duration: 1000
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
              }
            ]
        },
        {
            id: 'methodology',
            alignment: 'left',
            title: 'Reusable Methodology',
            image: './images/qgis-model.png',
            description: '<ol><li>Create isochrones from school points using <a href="https://github.com/mapbox/unicef-school-accessibility/blob/main/isochrones.py">Mapbox Isochrone API</a>.</li><li>Create layers for each connectivity band by unioning isochrones by connectivity_speed, and subtracting bands from each other.</li><li>Calculate pop reached by each band by joining population raster to sliced isochrones with zonal statistics.</li></ol> This is reusable!',
            location: {
                center: [75.0802,43.0227],
                zoom: 11.37,
                pitch: 75,
                bearing: 60
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
            ],
            onChapterExit: []
        },
        {
            id: 'issues-population',
            alignment: 'left',
            title: 'Issues: population data sets',
            image: 'images/pop-table.png',
            description: 'There are many world population datasets, which is best? We tried WorldPop Constrained, WorldPop Unconstrained, and Facebook Population, giving a wide variety of results: from 9.8 to 16.5 million for high connectivity region. Next: look at SEDAC GPW data which includes age demographics, and add population as a visual map layer.',
            location: {
              center: [65.12,48.39],
              zoom: 4.5,
              pitch: 4.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                layer: 'pop-extrusion',
                opacity: 1
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
            onChapterExit: [
              {
                layer: 'pop-extrusion',
                opacity: 0
              },
            ]
        },
        {
            id: 'schools?',
            alignment: 'left',
            title: 'Issues: data quality',
            image: '',
            description: 'Looking at the satellite imagery here, there don\'t appear to be any schools. Are these points actually schools? Or is our imagery old?',
            location: {
                center: [71.732,43.5103],
                zoom: 14,
                pitch: 11,
                bearing: 0
            },
            onChapterEnter: [
              {
                layer: 'schools-glow',
                opacity: 1,
                duration: 1000
              },
            ],
            onChapterExit: []
        },
        {
            id: 'limitations-road',
            alignment: 'left',
            title: 'Limitation: road network',
            image: '',
            description: 'Isochrones depend on road network completeness. In OSM, major roads and cities are complete. Many villages are more minimal. Could address this by editing the road network (the imagery refresh helps!) and adding a buffer around school location.',
            location: {
                center: [69.424121,44.809783],
                zoom: 15.41,
                pitch: 0,
                bearing: -22.5
            },
            onChapterEnter: [
              {
                layer: 'kz30-low',
                opacity: .50
              },
              {
                layer: 'kz30-med',
                opacity: 0
              },
              {
                layer: 'kz30-high',
                opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'kz30-low',
                opacity: 0
              }
            ]
        },
        { /* this is confusing and a bit of a non sequitur. The generalized shapes are also invalid */
                    id: 'limitations-generalizations',
                    alignment: 'left',
                    title: 'Issues: isochrone geometry',
                    image: '',
                    description: 'Generalized shapes returned by Isochone API can have invalid geometry, so we used large non-generalized shapes making analysis slow and unwieldy',
                    location: {
                        center: [79.8827,45.4022],
                        zoom: 10.35,
                        pitch: 70,
                        bearing: -176.8
                    },
                    onChapterEnter: [
                      {
                        layer: 'kz30-low',
                        opacity: .50
                      },
                      {
                        layer: 'kz30-med',
                        opacity: .50
                      },
                      {
                        layer: 'kz30-high',
                        opacity: .75
                      }
                    ],
                    onChapterExit: []
        },
        {
            id: 'next-steps',
            alignment: 'left',
            title: 'Next Steps',
            image: '',
            description: 'What\'s next? Feedback on the analysis and visualization. Refinement of methods. Sharing and Training. Development of Story. Expansion to other locations.',
            location: {
                center: [70.8426,42.2146],
                zoom: 12.66,
                pitch: 75,
                bearing: -12.8
            },
            callback: 'disableFreetime',
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        //conclusion
        {
            id: 'explore',
            alignment: 'left',
            title: 'Explore',
            image: '',
            description: '',
            location: {
              center: [65.12,48.39],
              zoom: 4.5,
              pitch: 4.00,
              bearing: 0.00
          },
            callback: 'enableFreetime',
            onChapterEnter: [
              {
                layer: 'kazakhstan-merged',
                opacity: 1,

              },
              {
                layer: 'kz30-low',
                opacity: 0
              },
              {
                layer: 'kz30-med',
                opacity: 0
              },
              {
                layer: 'kz30-high',
                opacity: 0
              }
            ],
            onChapterExit: [
              {
                layer: 'kazakhstan-merged',
                opacity: 0
              }
            ]
        }
    ]
};
