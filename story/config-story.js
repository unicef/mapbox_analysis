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
            title: 'Connectivity Disparity across Schools in Kazakhstan',
            description: '',
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
                opacity: 1,
                duration: 3000
              },
                {
                  layer: 'kz30-high',
                  opacity: 0
                  // duration: 1000
                },
                {
                  layer: 'kz30-med',
                  opacity: 0,
                  // duration: 1000
                },
                {
                  layer: 'kz30-low',
                  opacity: 0,
                  // duration: 1000
                },
                {
                  layer: 'mask',
                  opacity:0.8,
                },
                {
                  layer: 'place-label (3) copy',
                  opacity:1
                },
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
            title: 'School Connectivity',
            description: 'There are <b>7,437 schools</b> in Kazakhstan with varying levels of internet connection. On the map, Green represents <b>3251 schools</b> with good internet connections (10 mbps speed or more), yellow represents 4062 schools with low quality internet connections (less than 10 mbps speed), and red represents 95 schools with no internet connections. (29 schools have not reported yet)' + '<div class="textLegend"><span style="background:#ff605b"><label>< 1 mb/s</label></span><span style="background:#ffc83d"><label>1-10 mb/s</label></span><span style="background:#8bd432"><label>> 10 mb/s</label></span></div>',
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
                  opacity:0.8,
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
            title: 'Student Connectivity',
            image: '',
            description: 'This disparity in connectivity is impacting the students. There are <b>3,669,269 students</b> in Kazakhstan. The map represents students count in each school through circle size and internet strength in school through colour. Green schools represent <b>2,433,695 students</b> with good internet connections (10 mbps speed or more), yellow represents 1,214,596 schools with low quality internet connections (less than 10 mbps speed), and red represents 19,413 schools with no internet connections. (29 schools have not reported yet)' + '<div class="textLegend"><span style="background:#ff605b"><label>< 1 mb/s</label></span><span style="background:#ffc83d"><label>1-10 mb/s</label></span><span style="background:#8bd432"><label>> 10 mb/s</label></span></div><br><span style="font-size:0.8em;color:#d3d3d3;">*Schools are sized by student population.</span>',
            location: {
              center: [65.121,48.391],
              zoom: 4,
              pitch: 0,
              bearing: 0,
              duration: 4000
            },
            onChapterEnter: [
            {
              layer: 'mask',
              opacity: 0.8,
            },
            {
              layer: 'place-label (3) copy',
              opacity:1
             },
              {
                layer: 'schools-glow',
                opacity: .9,
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
                opacity: 0.8,
              },
              {
                layer: 'place-label (3) copy',
                opacity:0
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
            id: 'socio-economic',
            alignment: 'left',
            title: 'Socio-economic status of Kazakhstan',
            image: '',
            description: 'We can also overlay this with other data to see how connectivity interacts with important socioeconomic indicators.' + '<div class="legendHold"><div class="textLegend"><span style="background:#d7191c;"></span><span style="background:#fdae61"></span><span style="background:#ffffbf"></span><span style="background:#a6d96a"></span><span style="background:#1a9641"></span></div></div>',
            location: {
              center: [68.200,47.391],
              zoom: 5,
              pitch: 35,
              bearing: 1,
              duration: 1000
            },
            // rotateAnimation: true,
            // callback: 'enableFreetime',
            onChapterEnter: [
              {
                layer: 'schools-glow',
                opacity: 0,
                duration: 1000
              },
              {
                layer: 'mask',
                opacity: 0.8,
              },
              {
                layer: '3D-extrusions',
                opacity: 0.8,
                duration:1000
              },
              {
                layer: 'kaz-analysis-urban',
                opacity: 0,
                duration: 1000
              },
              // { /* not sure this adds much at this zoom level*/
              //   layer: 'heatmap',
              //   opacity: 0
              // },
              //{
              //  layer: 'kazakhstan-merged',
              //  opacity: 0
              //},
              // {
              //   layer: 'kz-relative-wealth-index',
              //   opacity: .9
              // },
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
              }
            ],
            onChapterExit: []
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
              layer: 'mask',
              opacity: 0.8,
            },
            {
              layer: 'place-label (3) copy',
              opacity:1
             },
              {
                layer: '3D-extrusions',
                opacity: 0.4,
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
              layer: 'mask',
              opacity: 0.8,
            },
            {
              layer: 'place-label (3) copy',
              opacity:1
             },
            {
              layer: '3D-extrusions',
              opacity: 0.4,
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
              layer: 'mask',
              opacity: 0.6,
            },
            {
              layer: 'place-label (3) copy',
              opacity:1
             }, 
            {
              layer: '3D-extrusions',
              opacity: 0.4,
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
            }
          ],
          onChapterExit: []
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
              pitch: 0,
              bearing: 0
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
