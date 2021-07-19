var config = {
    // style: 'mapbox://styles/mikelmaron/ckiis912v087219qqo3hf2nuz/',
    style: 'mapbox://styles/mikelmaron/ckohmfez83t2v18pnbvvktn2j',
    accessToken: 'pk.eyJ1IjoibWlrZWxtYXJvbiIsImEiOiJjaWZlY25lZGQ2cTJjc2trbmdiZDdjYjllIn0.Wx1n0X7aeCQyDTnK6_mrGw',
    showMarkers: false,
    theme: 'dark',
    title: 'Unicef Giga: Kazakhstan',
    subtitle: 'Accessibility analysis of connected schools',
    byline: '',
    footer: 'Note: ',
    use3dTerrain: false,
    rotateAnimation: true,
    chapters: [
          {
            id: 'intro',
            alignment: 'left',
            title: 'Unicef Giga: Kazakhstan',
            description: 'Accessibility analysis of connected schools.',
            location: {
                center: [60.30, 50.5],
                zoom: 5,
                pitch: 30,
                bearing: 45
            },
            rotateAnimation: true,
            callback: 'disableFreetime',
            onChapterEnter: [
                {
                  layer: 'school-outline',
                  opacity: 0,
                  duration: 500
                },
                {
                  layer: 'kz30-high',
                  opacity: .8
                  // duration: 1000
                },
                {
                  layer: 'kz30-med',
                  opacity: .8,
                  // duration: 1000
                },
                {
                  layer: 'kz30-low',
                  opacity: .8,
                  // duration: 1000
                },
                {
                  layer: 'mask',
                  opacity:0.75,
                },
                {
                  layer: 'place-label (3) copy',
                  opacity:0
                },
                {
                  layer: 'schools-dots',
                  opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'quschoqy',
            alignment: 'left',
            title: '',
            description: 'This school serves Quschoqy, Kazakhstan.',
            location: {
                center: [73.40055406093597,50.2306759908996],
                zoom: 17,
                pitch: 0,
                bearing: 0.00,
                duration: 3000
            },
            onChapterEnter: [
              {
                layer: 'school-outline',
                opacity: 1,
                duration: 3000
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
                layer: 'mask',
                opacity: 0.2,
                duration: 1000
              },
              {
                layer: 'place-label (3) copy',
                opacity:1
              },
              {
                layer: 'schools-dots',
                opacity: 1,
                duration:2000
              }
            ],
            onChapterExit: []
        },
        {
            id: 'kazakhstan-schools',
            alignment: 'left',
            title: '',
            description: 'There are <b>7,410 schools</b> in Kazakhstan.<br><span style="font-size:0.8em;color:#9a9a9a;">*Schools are sized by student population.</span>',
            location: {
                center: [65.121,48.391],
                zoom: 4,
                pitch: 0,
                bearing: 0.00,
                duration: 3000
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [
                {
                  layer: 'school-outline',
                  opacity: 0,
                  duration: 500
                },
                {
                  layer: 'mask',
                  opacity:0.9,
                  duration: 3000
                },
                {
                  layer: 'place-label (3) copy',
                  opacity:0
                },
                {
                  layer: 'schools-glow',
                  opacity: 0,
                  duration: 1000
                },
                {
                  layer: 'mapbox-satellite',
                  opacity: 0,
                  duration: 3000
                },
                {
                  layer: 'schools-dots',
                  opacity: 0.45,
                  duration: 3000
                }
                // {
                //   layer: 'schools-glow',
                //   opacity: 0
                // }
            ],
            onChapterExit: [
              {
                layer: 'mapbox-satellite',
                opacity: 1
              }
            ]
        },
        {
            id: 'schools-connectivity',
            alignment: 'left',
            title: 'School Connectivity',
            image: '',
            description: 'Internet access at each school varies. The green schools have good connections, the red have little or none, and the yellow are somewhere in between.' + '<div class="textLegend"><span style="background:#ff605b"><label>Limited</label></span><span style="background:#ffc83d"><label>< 5 mb/s</label></span><span style="background:#8bd432"><label>> 5 mb/s</label></span></div><br><span style="font-size:0.8em;color:#d3d3d3;">*Schools are sized by student population.</span>',
            location: {
              center: [65.121,48.391],
              zoom: 4,
              pitch: 0,
              bearing: 0,
              duration: 4000
            },
            onChapterEnter: [
              {
                layer: 'schools-glow',
                opacity: .95,
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
              {
                layer: 'mask',
                opacity: 0.9,
              },
              {
                layer: 'schools-dots',
                opacity: 0,
                duration: 1000
              }
            ],
            onChapterExit: []
        },
        {
          id: 'schools-infographic-1',
          alignment: 'left',
          title: 'Placeholder',
          image: '',
          description: 'Lorem',
          location: {
            center: [65.121,48.391],
            zoom: 4,
            pitch: 0,
            bearing: 0
              // duration: 5000
          },
          onChapterEnter: [
            {
              layer: 'mask',
              opacity: 0.6,
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
              layer: 'place-label (3) copy',
              opacity:1
            },
            {
              layer: 'schools-glow',
              opacity: 0,
              duration: 1000
            },
            { /* not sure this adds much at this zoom level*/
              layer: 'heatmap',
              opacity: 0,
              duration: 0
            }
          ],
          onChapterExit: []
        },
        {
          id: 'schools-infographic-2',
          alignment: 'left',
          title: 'Placeholder',
          image: '',
          description: 'Lorem',
          location: {
            center: [65.121,48.391],
            zoom: 4,
            pitch: 0,
            bearing: 0
          },
          onChapterEnter: [
            {
              layer: 'mask',
              opacity: 0.6,
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
              layer: 'place-label (3) copy',
              opacity:1
            },
            {
              layer: 'schools-glow',
              opacity: 0,
              duration: 1000
            }
            // { /* not sure this adds much at this zoom level*/
            //   layer: 'heatmap',
            //   opacity: 0,
            //   duration: 0
            // }
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
                duration: 5000
            },
            // callback: 'enableFreetime',
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
                layer: 'place-label (3) copy',
                opacity:1
              },
              {
                layer: 'schools-glow',
                opacity: 0,
                duration: 1000
              },
              // { /* not sure this adds much at this zoom level*/
              //   layer: 'heatmap',
              //   opacity: 0,
              //   duration: 0
              // },
              {
                layer: '3D-extrusions',
                opacity: 0,
                duration:0
              },
              {
                layer: 'kaz-analysis-urban',
                opacity: 0,
                duration:0
              }
            ],
            onChapterExit: []
        },
        {
            id: 'schools-population',
            alignment: 'left',
            title: 'Population by Connectivity',
            image: '',
            description: 'Then we can overlay this map with population data and start to see how many people have access to this level of connectivity. Remember, that we’re defining access as being within a 30 minute drive of a connected school. We found: <b>14.78 million people with high connectivity, 932k with only medium, and 40.5k with only low connectivity school access</b> leaving ~3m people without connectivity as defined by a 30 minute drive.' + '<div class="legendHold"><div class="textLegend"><span style="background:#d7191c;"></span><span style="background:#fdae61"></span><span style="background:#ffffbf"></span><span style="background:#a6d96a"></span><span style="background:#1a9641"></span><label class="lowLabel">← Lower connectivity</label><label class="highLabel">Higher connectivity →</label></div><div class="heightLegend"><img src="./img/legend_height.svg"><label class="popLabel">Higher Pop. Density ⟶</label></div></div>',
            location: {
              center: [68.32591470259335, 40.77472359994684],
              zoom: 8.8,
              pitch: 28,
              bearing: 0,
              duration: 5000
          },
            // callback: 'enableFreetime',
            onChapterEnter: [
              // { /* not sure this adds much at this zoom level*/
              //   layer: 'pop-extrusion',
              //   opacity: 1,
              //   duration: 1000
              // },
              // { /* not sure this adds much at this zoom level*/
              //   layer: 'pop-areas-simp-8rwb7g',
              //   opacity: 1,
              //   duration: 1000
              // },
              /* not sure this adds much at this zoom level*/
              {
                layer: '3D-extrusions',
                opacity: 0.2,
                duration: 1000
              },
              {
                layer: 'kaz-analysis-urban',
                opacity: 1,
                duration: 1000
              },
              // {
              //   layer: 'heatmap',
              //   opacity: 1,
              //   duration: 1000
              // },
              {
                layer: 'schools-glow',
                opacity: 0,
                duration: 1000
              },
              {
                layer: 'kz30-high',
                opacity: 0.2,
                duration: 1000
              },
              {
                layer: 'kz30-med',
                opacity: 0.2,
                duration: 1000
              },
              {
                layer: 'kz30-low',
                opacity: 0.2,
                duration: 1000
              },
              {
                /* these labels make it hard to read */
                layer: 'place-label (3) copy',
                opacity: .6,
              },
              // {
              //   layer: 'kz-relative-wealth-index',
              //   opacity: 0
              // }
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
            id: 'economic',
            alignment: 'left',
            title: 'Economic',
            image: '',
            description: 'We can also overlay this with other data to see how connectivity interacts with important socioeconomic indicators.' + '<div class="legendHold"><div class="textLegend"><span style="background:#d7191c;"></span><span style="background:#fdae61"></span><span style="background:#ffffbf"></span><span style="background:#a6d96a"></span><span style="background:#1a9641"></span><label class="lowLabel">← Lower wealth</label><label class="highLabel">Higher wealth →</label></div><div class="heightLegend"><img src="./img/legend_height.svg"><label class="popLabel">Higher Pop. Density ⟶</label></div></div>',
            location: {
              center: [68.32591470259335, 40.77472359994684],
              zoom: 8.8,
              pitch: 28,
              bearing: 0,
              duration: 5000
            },
            // rotateAnimation: true,
            // callback: 'enableFreetime',
            onChapterEnter: [
              {
                layer: '3D-extrusions',
                opacity: 0.2,
                duration:1000
              },
              {
                layer: 'kaz-analysis-urban',
                opacity: 1,
                duration: 1000
              },
              // { /* not sure this adds much at this zoom level*/
              //   layer: 'heatmap',
              //   opacity: 0
              // },
              {
                layer: 'kazakhstan-merged',
                opacity: 0
              },
              // {
              //   layer: 'kz-relative-wealth-index',
              //   opacity: .9
              // },
              {
                layer: 'kz30-high',
                opacity: 0.2,
                duration: 1000
              },
              {
                layer: 'kz30-med',
                opacity: 0.2,
                duration: 1000
              },
              {
                layer: 'kz30-low',
                opacity: 0.2,
                duration: 1000
              }
            ],
            onChapterExit: []
        },
        {
          id: 'high-economic-1',
          alignment: 'left',
          title: 'Higher connectivity in schools in higher wealth regions. Urban region of Almaty',
          image: '',
          description: 'Lorem Ipsum' + '<div class="legendHold" id="legendSm"><div class="textLegend"><span style="background:#e66101;"></span><span style="background:#fdb863"></span><span style="background:#f7f7f7;"></span><span style="background:#b2abd2;"></span><span style="background:#5e3c99;"></span><label class="lowLabel">← Lower wealth</label><label class="highLabel">Higher wealth →</label></div><div class="heightLegend"><img src="./img/legend_height.svg"><label class="popLabel">Higher Pop. Density ⟶</label></div></div>' + '<nav id="menuSm"></nav>',
          location: {
            center: [76.9024443, 43.260229],
            zoom: 6.8,
            pitch: 20,
            bearing: 0,
            duration: 5000
          },
          // rotateAnimation: true,
          // callback: 'enableFreetime',
          onChapterEnter: [
            {
              layer: '3D-extrusions',
              opacity: 0.2,
              duration:1000
            },
            {
              layer: 'kaz-analysis-urban',
              opacity: 1,
              duration: 1000
            },
            // { /* not sure this adds much at this zoom level*/
            //   layer: 'heatmap',
            //   opacity: 0
            // },
            {
              layer: 'kazakhstan-merged',
              opacity: 0
            },
            // {
            //   layer: 'kz-relative-wealth-index',
            //   opacity: .9
            // },
            {
              layer: 'kz30-high',
              opacity: 0.2,
              duration: 1000
            },
            {
              layer: 'kz30-med',
              opacity: 0.2,
              duration: 1000
            },
            {
              layer: 'kz30-low',
              opacity: 0.2,
              duration: 1000
            }
          ],
          onChapterExit: []
        },
        {
          id: 'high-economic-2',
          alignment: 'left',
          title: 'Low connectivity in schools in spite of high wealth regions. Urban town of Aqtobe.',
          image: '',
          description: 'Lorem Ipsum' + '<div class="legendHold" id="legendSmTwo"><div class="textLegend"><span style="background:#e66101;"></span><span style="background:#fdb863"></span><span style="background:#f7f7f7;"></span><span style="background:#b2abd2;"></span><span style="background:#5e3c99;"></span><label class="lowLabel">← Lower wealth</label><label class="highLabel">Higher wealth →</label></div><div class="heightLegend"><img src="./img/legend_height.svg"><label class="popLabel">Higher Pop. Density ⟶</label></div></div>' + '<nav id="menuSmTwo"></nav>',
          location: {
            center: [57.1926438, 50.2867314],
            zoom: 8,
            pitch: 28,
            bearing: 0,
            duration: 5000
          },
          // rotateAnimation: true,
          // callback: 'enableFreetime',
          onChapterEnter: [
            {
              layer: '3D-extrusions',
              opacity: 0.2,
              duration:1000
            },
            {
              layer: 'kaz-analysis-urban',
              opacity: 1,
              duration: 1000
            },
            // { /* not sure this adds much at this zoom level*/
            //   layer: 'heatmap',
            //   opacity: 0
            // },
            {
              layer: 'kazakhstan-merged',
              opacity: 0
            },
            // {
            //   layer: 'kz-relative-wealth-index',
            //   opacity: .9
            // },
            {
              layer: 'kz30-high',
              opacity: 0.2,
              duration: 1000
            },
            {
              layer: 'kz30-med',
              opacity: 0.2,
              duration: 1000
            },
            {
              layer: 'kz30-low',
              opacity: 0.2,
              duration: 1000
            }
          ],
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
            callback: 'disableFreetime',
            onChapterEnter: [
              {
                layer: '3D-extrusions',
                opacity: 0,
                duration:0
              },
              {
                layer: 'kaz-analysis-urban',
                opacity: 0,
                duration: 0
              },
              {
                layer: 'kazakhstan-merged',
                opacity: .75
              },
              // {
              //   layer: 'kz-relative-wealth-index',
              //   opacity: 0,
              // },
              {
                layer: 'heatmap',
                opacity: 0,
              },
              {
                layer: 'schools-glow',
                opacity: 0,
              },
              {
                layer: 'kz30-high',
                opacity: .2,
                duration: 1000
              },
              {
                layer: 'kz30-med',
                opacity: .2,
                duration: 1000
              },
              {
                layer: 'kz30-low',
                opacity: .2,
                duration: 1000
              }
            ],
            callback: 'disableFreetime',
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
            description: '<div id="freeExplore">Back to story ↑</div>' + 'Go ahead, explore if you like! Just drag and zoom to go where you want.' + '<nav id="menu"></nav>' + '<div id="methodNote">Note: Quantile legends were simplified. Wealth index values ranged from -0.42 up to 1.99 in urban regions. Connectivity speeds ranged from 1 up to 11.</div>',
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
              },
              // {
              //   layer: 'kz-relative-wealth-index',
              //   opacity: 0
              // }
            ],
            onChapterExit: [
            ]
        }
    ]
};