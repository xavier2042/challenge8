$(function() {
      Morris.Donut({
        element: 'donut',
        data: [
          {label: "Joueur Wow",value: 60},
          {label: "Joueur Diablo3",value: 25},
          {label: "Joueur Sims",value: 15}
        ],
        colors: ['blue','white','red']

      });

      Morris.Area({
        element: 'monBeauGraph',
        data: [{
          period: '2010 Q1',
          rouge: 2666,
          Vert: null,

        }, {
          period: '2010 Q2',
          rouge: 2778,
          Vert: 2294,

        }, {
          period: '2010 Q3',
          rouge: 4912,
          Vert: 1969,

        }, {
          period: '2010 Q4',
          rouge: 3767,
          Vert: 3597,

        }, {
          period: '2011 Q1',
          rouge: 6810,
          Vert: 1914,

        }, {
          period: '2011 Q2',
          rouge: 5670,
          Vert: 4293,

        }, {
          period: '2011 Q3',
          rouge: 4820,
          Vert: 3795,

        }, {
          period: '2011 Q4',
          rouge: 15073,
          Vert: 5967,

        }, {
          period: '2012 Q1',
          rouge: 10687,
          Vert: 4460,

        }, {
          period: '2012 Q2',
          rouge: 8432,
          Vert: 5713,

        }],
        xkey: 'period',
        ykeys: ['rouge', 'Vert'],
        labels: ['hiver', 'été'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
      });
});
