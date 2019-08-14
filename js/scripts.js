var volume = function(VolumeInput) {
  return volumeInput * 29.5735;
};

$(document).ready(function() {
  $("form#volumeConversion").submit(function(event) {
    event.preventDefault();
		$("#volumeOutput").text(volume);
	});
/*
  $("form#distanceConversion").submit(function(event) {
event.preventDefault();
		$("#distanceOutput").text((distanceInput)/(2.54));
	});

  $("form#temperatureConversion").submit(function(event) {
event.preventDefault();
		$("#temperatureOutput").text((temperatureInput - 32)*(5/9));
	});

  $("form#timeConversion").submit(function(event) {
event.preventDefault();
		$("#timeOutput").text((timeInput)*1);
	});
*/
  });
