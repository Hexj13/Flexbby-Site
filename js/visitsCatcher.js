// Users can disable LocalStorage. Check it.
var visits = [];

try {
  var localStorage = window.localStorage;
  var setVisits = function(visits) {
    localStorage.setItem("Visits", JSON.stringify(visits));
  }
  var getVisits = function() {
    try {
      return JSON.parse(localStorage.getItem("Visits") || []);
    } catch(e) {
      return [];
    }
  }

  visits = getVisits();
  // Visit dict
  var visit_dict = {
    u: window.location.href.toString().split(window.location.host)[1], // Get user url & stringify
    d: Date.now() // Date now
  };
  //
  try {
    // If localStorage is empty, then create an array and write a dictionary to it (the last visit)
    visits.push(visit_dict);
    setVisits(visits);
  }
  // Catch the error and call isQuotaExceeded(e)
  catch (e) {
    // Storage full
    if (isQuotaExceeded(e)) {
      // Take the array and remove the first element.
      visits.shift();
      // Add a new element to the end of the array (last visit)
      visits.push(visit_dict);
      setVisits(visits);
    }
  }

  // Check the error code, because different browsers will have different codes
  function isQuotaExceeded(e) {
    var quotaExceeded = false;
    if (e) {
      if (e.code) {
        switch (e.code) {
          case 22:
            quotaExceeded = true;
            break;
          case 1014:
            // Firefox
            if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
              quotaExceeded = true;
            }
            break;
        }
      } else if (e.number === -2147024882) {
        // Internet Explorer 8
        quotaExceeded = true;
      }
    }
    return quotaExceeded;
  }
} catch (e) {
  // Access denied :-(
}

function getAllVisits() {
  return visits;
}
