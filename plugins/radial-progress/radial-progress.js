// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var python1 = new ProgressBar.Circle(python, {
    color: '#aaa',
    // This has to be the same siz  e as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText("<center><h5 class='section-heading'>Python<br/>"+ value + "%</h5></center>");
      }
  
    }
  });

  var java1 = new ProgressBar.Circle(java, {
    color: '#aaa',
    // This has to be the same siz  e as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText("<center><h5 class='section-heading'>Java<br/>"+ value + "%</h5></center>");
      }
  
    }
  });

  var js1 = new ProgressBar.Circle(js, {
    color: '#aaa',
    // This has to be the same siz  e as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText("<center><h5 class='section-heading'>JavaScript<br/>"+ value + "%</h5></center>");
      }
  
    }
  });

  var bootstrap1 = new ProgressBar.Circle(bs, {
    color: '#aaa',
    // This has to be the same siz  e as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText("<center><h5 class='section-heading'>Bootstrap<br/>"+ value + "%</h5></center>");
      }
  
    }
  });

  var react1 = new ProgressBar.Circle(react, {
    color: '#aaa',
    // This has to be the same siz  e as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText("<center><h5 class='section-heading'>Reactjs<br/>"+ value + "%</h5></center>");
      }
  
    }
  });

  var django1 = new ProgressBar.Circle(django, {
    color: '#aaa',
    // This has to be the same siz  e as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText("<center><h5 class='section-heading'>Django<br/>"+ value + "%</h5></center>");
      }
  
    }
  });

  python1.animate(0.60);  // Number from 0.0 to 1.0
  java1.animate(0.45);
  js1.animate(0.35);
  bootstrap1.animate(0.65);
  react1.animate(0.01);
  django1.animate(0.25);