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
            description: 'There are <b>7,437 schools</b> in Kazakhstan with varying levels of internet connection.' + '<div class="textLegend"><span style="background:#ff605b"> <label style="margin-top: -25px;">95 schools</label><label>< 1 mb/s</label></span><span style="background:#ffc83d"><label style="margin-top: -25px;">4062 schools</label><label>1-10 mb/s</label></span><span style="background:#8bd432"><label style="margin-top: -25px;">3251 schools</label><label>> 10 mb/s</label></span></div><br><span style="font-size:0.8em;color:#d3d3d3;">*29 schools have not reported data yet.</span>',
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
                  opacity: 1,
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
            description: 'This disparity in connectivity is impacting the students. There are <b>3,669,269 students</b> in Kazakhstan. The map represents students count in each school through circle size and internet strength through colour.' + '<div class="textLegend"><span style="background:#ff605b"> <label style="margin-top: -25px;">19,413 students</label><label>< 1 mb/s</label></span><span style="background:#ffc83d"><label style="margin-top: -25px;">1,214,596 students</label><label>1-10 mb/s</label></span><span style="background:#8bd432"><label style="margin-top: -25px;">2,433,695 students</label><label>> 10 mb/s</label></span></div><br><span style="font-size:0.8em;color:#d3d3d3;">*29 schools have not reported data yet.</span>',
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
            title: 'Socio-economic disparity in Kazakhstan',
            image: '',
            description: 'To understand the unequal distribution of connectivity across the region better, we analysed internet speed against population, wealth index, internet speed, schools count and region type (urban or rural). <br><br><b>As expected, we saw strong positive correlation between internet speed and wealth, while controlling for population and region type.</b><br><br>This relation is evident visually on the map as well. The map shows all populated regions of Kazakshtan divided into 5 sq km area grids.'+ '<div class="legendHold"><div class="textLegend"><span style="background:#d7191c;"> <label style="margin-top: -25px;">4,657,693</label></span><span style="background:#fdae61"><label style="margin-top: -25px;">1,324,825</label></span><span style="background:#ffffbf"><label style="margin-top: -25px;">1,579,179</label></span><span style="background:#a6d96a"><label style="margin-top: -25px;">1,676,972</label></span><span style="background:#1a9641"><label style="margin-top: -25px;">2,554,279people</label></span><label class="lowLabel">← Lower wealth population</label><label class="highLabel">Higher wealth population→</label></div><div class="heightLegend"><img src="./img/legend_height.svg"><label class="popLabel">Higher Pop. Density ⟶</label></div></div><br><span style="font-size:0.8em;color:#d3d3d3;">*Source: Facebook Data for Good - https://dataforgood.fb.com/tools/population-density-maps/.</span>',
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
                opacity: 1,
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
            title: 'Lower connectivity in schools in lower wealth regions in urban Maktaaralskiy (South Kazakshtan)',
            image: '',
            description: 'Lorem Ipsum'  + '<div class="legendHold"><div class="textLegend"><span style="background:#d7191c;"> <label style="margin-top: -25px;">217,835</lowabel></span><span style="background:#fdae61"><label style="margin-top: -25px;">780,671</label></span><span style="background:#ffffbf"><label style="margin-top: -25px;">447,723</label></span><span style="background:#a6d96a"><label style="margin-top: -25px;">1,237,559</label></span><span style="background:#1a9641"><label style="margin-top: -25px;">2,367,047people</label></span><label class="lowLabel">← Lower wealth urban population</label><label class="highLabel">Higher wealth urban population→</label></div><div class="heightLegend"><img src="./img/legend_height.svg"><label class="popLabel">Higher Pop. Density ⟶</label></div></div>' + '<nav id="menuSm"></nav>', 
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
          title: 'Higher connectivity in schools in higher wealth regions of urban Almaty (Alma-Ata)',
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
          title: 'Low connectivity in schools in spite of high wealth regions in urban town of Aqtobe',
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
