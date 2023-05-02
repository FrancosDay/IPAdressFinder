function displayIP() {
  // Get IP address using a free API
  fetch("https://api.ipify.org/?format=json")
    .then(response => response.json())
    .then(data => {
      // Update the HTML page with the IP address
      document.getElementById("ip-address").innerHTML = "Your IP address is: " + data.ip;
    })
    .catch(error => {
      console.error("Unable to get IP address:", error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  displayIP();
});