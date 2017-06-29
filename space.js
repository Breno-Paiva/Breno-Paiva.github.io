// bonsai.run(document.getElementById('movie'), {
//     code: function() {
//       new Rect(10, 10, 100, 100)
//         .addTo(stage)
//         .attr('fillColor', 'green');
//     },
//     width: 500,
//     height: 400
//   });

  // var screenWidth = 250;
  // var screenHeight = 250;

  var circleShape = new Circle(150, 150, 50).fill('teal').addTo(stage);

  var circleAnimation = new Animation('2s',{
    x: 1200
  },{
    repeat: 100
  })

  circleShape.animate(circleAnimation)
