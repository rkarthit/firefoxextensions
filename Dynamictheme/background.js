var currentTheme = '';

const themes = {
  '1': {
    images: {
      headerURL: 'theme1.jpg',
    },
      colors: {
      accentcolor: '#CF723F',
      textcolor: '#111',
	}
    },
    
  '2': {
    images: {
      headerURL: 'theme2.jpg',
    },
colors: {
      accentcolor: '#CF723F',
      textcolor: '#111',
	}
    },
   
'3': {
    images: {
      headerURL: 'theme3.jpg',
    },
colors: {
      accentcolor: '#CF723F',
      textcolor: '#111',
	}
    },
    
'4': {
    images: {
      headerURL: 'theme4.jpg',
    },
colors: {
      accentcolor: '#CF723F',
      textcolor: '#111',
	}
    },
    
'5': {
    images: {
      headerURL: 'theme5.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#111',
	}
    },
'6': {
    images: {
      headerURL: 'theme6.jpg',
    },
   colors: {
      accentcolor: '#CF723F',
      textcolor: '#111',
	}
    },
'7': {
    images: {
      headerURL: 'theme7.jpg',
    },
    colors: {
      accentcolor: '#CF723F',
      textcolor: '#111',
	}
    }
  
};

function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function myFunction() {

 var d = new Date();
 var weekday= d.getDate();
var weekday = new Array(7);
  weekday[0] = setTheme('1');
  weekday[1] = setTheme('2');
  weekday[2] = setTheme('3');
  weekday[3] = setTheme('4');
  weekday[4] = setTheme('5');
  weekday[5] = setTheme('6');
  weekday[6] = setTheme('7');

  var d = weekday[d.getDay()];
 
}

myFunction();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(myFunction);
browser.alarms.create('myFunction', {periodInMinutes: 60});