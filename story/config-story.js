var config = {
  // style: 'mapbox://styles/mikelmaron/ckiis912v087219qqo3hf2nuz/',
  style: 'mapbox://styles/mikelmaron/ckw6j9wox186e14o3ry5w830k',
  accessToken: 'pk.eyJ1IjoibWlrZWxtYXJvbiIsImEiOiJjaWZlY25lZGQ2cTJjc2trbmdiZDdjYjllIn0.Wx1n0X7aeCQyDTnK6_mrGw',
  showMarkers: false,
  theme: 'dark',
  title: 'Unicef Giga: Kazakhstan',
  subtitle: 'Accessibility analysis of connected schools',
  byline: '',
  footer: '<li>School geolocation, internet connectivity and coverage data powered by <a href="https://projectconnect.unicef.org/map" target="_blank">Project Connect.</a></li><li><a href="https://www.mapbox.com/solutions/interactive-storytelling" target="_blank">Interactive Storytelling</a> and <a href="https://docs.mapbox.com/playground/isochrone/" target="_blank">Isochrone API</a> powered by Mapbox.</li><li>Population and wealth index data estimates powered by <a href="https://dataforgood.fb.com/tools/population-density-maps/" target="_blank">Facebook Data for Good</a></li><li>Rural-urban polygons powered by <a href="https://ghsl.jrc.ec.europa.eu/" target="_blank">GHSL - Global Human Settlement Layer</a></li><li>Hexagonal grids powered by <a href="https://eng.uber.com/h3/" target="_blank">Uber-H3 library</a></li><br><b>Note</b><li>*29 schools have not reported data yet</li><li>**Given the significant gap in connectivity and socio-economic distribution across urban and rural regions, we analysed them separately. In the maps, the highlighted layer represents only the urban regions and the background layer with low opacity represents the entire populated region.</li><li>***Quantile legends were simplified. Wealth index values ranged from -0.42 up to 1.99 in urban regions. Connectivity speeds ranged from 1 up to 11.</li>',
  use3dTerrain: false,
  rotateAnimation: true,
  chapters: [{
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
      onChapterEnter: [{
          layer: '3D-extrusions',
          opacity: 0,
          duration: 1000
        },
        {
          layer: 'kz30-high-buff',
          opacity: 0
        },
        {
          layer: 'kz30-med-buff',
          opacity: 0
        },
        {
          layer: 'kz30-low-buff',
          opacity: 0
        },
        {
          layer: 'mask',
          opacity: 0.9,
        },
        {
          layer: 'place-label (3) copy',
          opacity: 1
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
      description: 'There are <b>7,437 schools</b> in Kazakhstan with varying levels of internet connectivity.*' + '<div class="textLegend"><div class="textLegendHeader">Number of schools by connectivity</div><span style="background:#ff605b"> <label style="margin-top: -25px;">95</label><label>< 1 mb/s</label></span><span style="background:#ffc83d"><label style="margin-top: -25px;">4,062</label><label>1-10 mb/s</label></span><span style="background:#8bd432"><label style="margin-top: -25px;">3,251</label><label>> 10 mb/s</label></span></div>',
      location: {
        center: [65.121, 48.391],
        zoom: 4,
        pitch: 0,
        bearing: 0.00,
        duration: 3000
      },
      mapAnimation: 'flyTo',
      onChapterEnter: [{
          layer: 'mask',
          opacity: 0.8,
          duration: 3000
        },
        {
          layer: 'place-label (3) copy',
          opacity: 0
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
      ],
      onChapterExit: [{
        layer: 'mapbox-satellite',
        opacity: 1
      }]
    },
    {
      id: 'schools-connectivity',
      alignment: 'left',
      title: 'Student Connectivity',
      image: '',
      description: 'Disparity in internet connectivity impacts students. There are 3.67 million students in Kazakhstan. Nearly 20 thousand students do not have access to the internetto internet at all. More than 1.21 million students, despite having some internet connectivity, do not have sufficient bandwidth to properly use digital learning resources.*' + '<div class="textLegend"><div class="textLegendHeader">Student population estimates by connectivity</div><span style="background:#ff605b"> <label style="margin-top: -25px;">0.02M</label><label>< 1 mb/s</label></span><span style="background:#ffc83d"><label style="margin-top: -25px;">1.21M</label><label>1-10 mb/s</label></span><span style="background:#8bd432"><label style="margin-top: -25px;">2.43M</label><label>> 10 mb/s</label></span></div><p style="font-size:0.8em;color:#d3d3d3;line-height:1.8em;">The map represents student population count per school by circle size, and internet strength through color.</p>',
      location: {
        center: [65.121, 48.391],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        duration: 4000
      },
      onChapterEnter: [{
          layer: 'mask',
          opacity: 0.8,
        },
        {
          layer: 'place-label (3) copy',
          opacity: 0
        },
        {
          layer: 'schools-glow',
          opacity: .9,
          duration: 1000
        },
        {
          layer: 'kz30-high-buff',
          opacity: 0
        },
        {
          layer: 'kz30-med-buff',
          opacity: 0
        },
        {
          layer: 'kz30-low-buff',
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
      title: 'The Economic Disparity of Connectivity',
      image: '',
      description: 'Connected schools lead to local economic benefits. For each school, we analyzed the size and wealth of the nearby population within an accessible distance of the school. Internet connectivity is not equally distributed. Controlling for population, there is a strong correlation between internet speed and wealth, further reinforcing economic disparities. We found 14.78 million people have access to nearby schools with high connectivity, and the rest of the country is divided between 932,000 people with medium connectivity, and 40.5k with low connectivity. This leaves 3 million people without connectivity at all.' + '<div class="legendHold" id="socio-economic-legend"></div><p style="font-size:0.8em;color:#d3d3d3;line-height:1.8em;">Use the right corner toggle to switch between the internet speed layer and the wealth index layer. Layers are visualized in 3D to show population density of each 5 km2 gridded area.</p>',
      location: {
        center: [68.200, 47.391],
        zoom: 5,
        pitch: 35,
        bearing: 1,
        duration: 1000
      },
      // rotateAnimation: true,
      // callback: 'enableFreetime',
      onChapterEnter: [{
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
          duration: 1000
        },
        {
          layer: 'kaz-analysis-urban',
          opacity: 0,
          duration: 1000
        },
        {
          layer: 'kz30-high-buff',
          opacity: 0,
          duration: 1000
        },
        {
          layer: 'kz30-med-buff',
          opacity: 0,
          duration: 1000
        },
        {
          layer: 'kz30-low-buff',
          opacity: 0,
          duration: 1000
        }
      ],
      onChapterExit: []
    },
    {
      id: 'economic',
      alignment: 'left',
      title: 'Lower connectivity and lower wealth',
      image: '',
      description: 'We found many regions such as Urban Maktaaralskiy (South Kazakhstan) where both connectivity and wealth were in the lower spectrum.**' + '<div class="legendHold" id="economic-legend"></div>',
      location: {
        center: [68.32591470259335, 40.77472359994684],
        zoom: 8.8,
        pitch: 28,
        bearing: 0,
        duration: 5000
      },
      // rotateAnimation: true,
      // callback: 'enableFreetime',
      onChapterEnter: [{
          layer: 'mask',
          opacity: 0.8,
        },
        {
          layer: 'place-label (3) copy',
          opacity: 1
        },
        {
          layer: '3D-extrusions',
          opacity: 0.3,
          duration: 1000
        },
        {
          layer: 'kaz-analysis-urban',
          opacity: 1,
          duration: 1000
        },
        {
          layer: 'kz30-high-buff',
          opacity: 0,
          duration: 1000
        },
        {
          layer: 'kz30-med-buff',
          opacity: 0,
          duration: 1000
        },
        {
          layer: 'kz30-low-buff',
          opacity: 0,
          duration: 1000
        }
      ],
      onChapterExit: []
    },
    {
      id: 'high-economic-1',
      alignment: 'left',
      title: 'Higher connectivity and higher wealth',
      image: '',
      description: 'Regions like Urban Almaty (Alma-Ata) typically have both higher connectivity and higher wealth.' + '<div class="legendHold" id="high-economic-1-legend"></div>',
      location: {
        center: [76.9024443, 43.260229],
        zoom: 6.8,
        pitch: 20,
        bearing: 0,
        duration: 5000
      },
      // rotateAnimation: true,
      // callback: 'enableFreetime',
      onChapterEnter: [{
          layer: 'mask',
          opacity: 0.8,
        },
        {
          layer: 'place-label (3) copy',
          opacity: 1
        },
        {
          layer: '3D-extrusions',
          opacity: 0.3,
          duration: 1000
        },
        {
          layer: 'kaz-analysis-urban',
          opacity: 1,
          duration: 1000
        },
        {
          layer: 'kz30-high-buff',
          opacity: 0,
          duration: 1000
        },
        {
          layer: 'kz30-med-buff',
          opacity: 0,
          duration: 1000
        },
        {
          layer: 'kz30-low-buff',
          opacity: 0,
          duration: 1000
        }
      ],
      onChapterExit: []
    },
    {
      id: 'high-economic-2',
      alignment: 'left',
      title: 'High wealth does not always mean high connectivity',
      image: '',
      description: 'We also found some regions like the urban town of Aqtobe where there is low connectivity in schools despite highdespite of high wealth. Such regions might hold potential to get schools connected in a self-sustaining way, given the right infrastructure investment.' + '<div class="legendHold" id="high-economic-2-legend"></div>',
      location: {
        center: [57.1926438, 50.2867314],
        zoom: 8,
        pitch: 28,
        bearing: 0,
        duration: 5000
      },
      // rotateAnimation: true,
      // callback: 'enableFreetime',
      onChapterEnter: [{
          layer: 'mask',
          opacity: 0.6,
        },
        {
          layer: 'place-label (3) copy',
          opacity: 1
        },
        {
          layer: '3D-extrusions',
          opacity: 0.4,
          duration: 1000
        },
        {
          layer: 'kaz-analysis-urban',
          opacity: 1,
          duration: 1000
        },
        {
          layer: 'kz30-high-buff',
          opacity: 0,
          duration: 1000
        },
        {
          layer: 'kz30-med-buff',
          opacity: 0,
          duration: 1000
        },
        {
          layer: 'kz30-low-buff',
          opacity: 0,
          duration: 1000
        }
      ],
      onChapterExit: []
    },
    {
      id: 'isochrones',
      alignment: 'left',
      title: 'How we did this?',
      image: '',
      description: 'At Giga, we are leveraging geospatial data modelling, machine learning and new technologies to find innovative ways to support connecting every school to the internet. We worked with <a href="https://www.mapbox.com/community" target="_blank">Mapbox Community</a> to measure the internet accessibility of every school using the <a href="https://docs.mapbox.com/playground/isochrone/" target="_blank">Isochrone API</a> and used them for comparison against population and wealth of the regions.',
      location: {
        center: [69.052, 47.437],
        zoom: 5,
        pitch: 0,
        bearing: 0,
        duration: 2000
      },
      // callback: 'enableFreetime',
      onChapterEnter: [{
          layer: 'kz30-low-buff',
          opacity: .75
        },
        {
          layer: 'kz30-med-buff',
          opacity: .75
        },
        {
          layer: 'kz30-high-buff',
          opacity: .75
        }
      ],
      onChapterExit: []
    },
    {
      id: 'explore',
      alignment: 'left',
      title: 'Explore & find more insights!',
      image: '',
      description: '<btn id="freeExplore">Scroll Zoom</btn>' + 'Go ahead, explore and find more brilliant insights! Just drag and zoom to go where you want.***',
      location: {
        center: [80.270, 50.448],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        duration: 4000
      },
      // callback: 'enableFreetime',
      onChapterEnter: [{
          layer: 'kz30-low-buff',
          opacity: .75
        },
        {
          layer: 'kz30-med-buff',
          opacity: .75
        },
        {
          layer: 'kz30-high-buff',
          opacity: .75
        }
      ],
      onChapterExit: []
    }
  ]
};