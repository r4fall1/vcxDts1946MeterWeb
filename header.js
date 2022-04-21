setInterval(updateValues, 2000);

function updateHtmlField(id, value) {
  if (value !== "nan")
	document.getElementById(id).innerHTML = value;
}

function msToTime(s) {
  function pad(n, z) {
	z = z || 2;
	return ('00' + n).slice(-z);
  }
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
}
function updateValues() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  console.log("params = " + this.responseText);
	  const vals = this.responseText.split(';');
	  updateHtmlField("phase1Voltage", vals[0]);
	  updateHtmlField("phase2Voltage", vals[1]);
	  updateHtmlField("phase3Voltage", vals[2]);
	  updateHtmlField("phase1ToPhase2Voltage", vals[3]);
	  updateHtmlField("phase2ToPhase3Voltage", vals[4]);
	  updateHtmlField("phase3ToPhase1Voltage", vals[5]);
	  updateHtmlField("waterTemperature", vals[6]);
	  updateHtmlField("heaterOperatingTime", msToTime(vals[7]));
	  updateHtmlField("heaterStatus", vals[8] > 0 ? "ON" : "OFF");
	};
  }
  xhttp.open("GET", "/params", false);
  xhttp.send();
}

function heaterTest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	  console.log("status = " + this.responseText);
	  updateValues();
	};
  }
  xhttp.open("GET", "/test", false);
  xhttp.send();
}