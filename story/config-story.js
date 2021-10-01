var config = {
    // style: 'mapbox://styles/mikelmaron/ckiis912v087219qqo3hf2nuz/',
    style: 'mapbox://styles/mikelmaron/ckohmfez83t2v18pnbvvktn2j',
    accessToken: 'pk.eyJ1IjoibWlrZWxtYXJvbiIsImEiOiJjaWZlY25lZGQ2cTJjc2trbmdiZDdjYjllIn0.Wx1n0X7aeCQyDTnK6_mrGw',
    showMarkers: false,
    theme: 'dark',
    title: 'Unicef Giga: Kazakhstan',
    subtitle: 'Accessibility analysis of connected schools',
    byline: '',
    footer: 'Data powered by: Project Connect.',
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
                opacity: 0,
                duration: 3000
              },
              {
                layer: '3D-extrusions',
                opacity: 0,
                duration:1000
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
                  opacity:0.9,
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
            description: 'There are <b>7,437 schools</b> in Kazakhstan with varying levels of internet connectivity.' + '<div class="textLegend"><div class="textLegendHeader">Number of schools</div><span style="background:#ff605b"> <label style="margin-top: -25px;">95</label><label>< 1 mb/s</label></span><span style="background:#ffc83d"><label style="margin-top: -25px;">4,062</label><label>1-10 mb/s</label></span><span style="background:#8bd432"><label style="margin-top: -25px;">3,251</label><label>> 10 mb/s</label></span></div><span style="font-size:0.8em;color:#d3d3d3;">*29 schools have not reported data yet.</span>',
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
            description: 'This disparity in internet connectivity is impacting the students. There are <b>3.67M students</b> in Kazakhstan. Around 20 thousand students in red areas do not have access to internet at all. More than 1.21 million students in yellow zones inspite of having internet connection do not have enough internet bandwidth to properly use any digital learning resources.' + '<div class="textLegend"><div class="textLegendHeader">Student population estimates</div><span style="background:#ff605b"> <label style="margin-top: -25px;">0.02M</label><label>< 1 mb/s</label></span><span style="background:#ffc83d"><label style="margin-top: -25px;">1.21M</label><label>1-10 mb/s</label></span><span style="background:#8bd432"><label style="margin-top: -25px;">2.43M</label><label>> 10 mb/s</label></span></div><span>The map represents student count in each school through circle size and internet strength through colour.<br><br></span><span style="font-size:0.8em;color:#d3d3d3;">*29 schools have not reported data yet.</span>',
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
              opacity:0
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
            title: 'Analysing Connectivity vis-à-vis Economic Disparity',
            image: '',
            description: 'To understand the unequal distribution of internet connectivity across the region further, we analysed internet speed against population, wealth index, school count and region type (urban or rural). <br><br><b>As expected, we saw a strong positive correlation between internet speed and wealth, while controlling for population and region type.</b><br><br>This relation is evident visually on the map as well. Use toggle option on the right to switch between the connectivity/internet speed layer and the wealth index layer. Both layers are elevated to show the population density of each 5 sq km area gridded region.'+ '<div class="legendHold" id="socio-economic-legend"></div>',
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
            title: 'Lower connectivity in schools in lower wealth regions',
            image: '',
            description: 'As expected we found many regions such as <b>Urban Maktaaralskiy (South Kazakhstan)</b> where both connectivity and wealth were in the lower spectrum.'  + '<div class="legendHold" id="economic-legend"></div><span style="font-size:0.8em;color:#d3d3d3;">Given the significant gap in urban and rural regions, we analysed them separately. The highlighted layer represents urban regions and the background layer with low opacity represents the entire populated region.</span>',
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
                opacity: 0.3,
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
          title: 'Higher connectivity in schools in higher wealth regions',
          image: '',
          description: 'We found regions like <b>Urban Almaty (Alma-Ata)</b> as well where both connectivity and wealth were in the higher spectrum.' + '<div class="legendHold" id="high-economic-1-legend"></div>',
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
              opacity: 0.3,
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
          title: 'Low connectivity in schools in spite of high wealth regions',
          image: '',
          description: 'Unexpectedly, we also found some regions like <b>urban town of Aqtobe</b> where there is low connectivity in schools in spite of high wealth. Such regions might hold a lot of potential to get connected in a self-sustaining way, given the right infrastructure investment.' + '<div class="legendHold" id="high-economic-2-legend"></div><span><b>At Giga, we are leveraging geospatial big data, modeling and new technologies to find innovative ways to support connecting every school to the internet.</span>',
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
            title: 'Explore & find more insights!',
            image: '',
            description: '<div id="freeExplore">Scroll Zoom</div>' + 'Go ahead, explore and find more brilliant insights! Just drag and zoom to go where you want.' + '<div id="methodNote">Note: Quantile legends were simplified. Wealth index values ranged from -0.42 up to 1.99 in urban regions. Connectivity speeds ranged from 1 up to 11.</div>',
            location: {
              center: [65.121,48.391],
              zoom: 4,
              pitch: 0,
              bearing: 0,
              duration: 4000
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