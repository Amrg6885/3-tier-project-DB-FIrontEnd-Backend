const statusEl = document.getElementById("status");
const outputEl = document.getElementById("output");

async function fetchData() {

  statusEl.textContent = "Loading...";
  statusEl.className = "status";

  try {

    const response = await fetch("/api/info");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    const now = new Date().toLocaleString();

    outputEl.textContent =
      JSON.stringify(data, null, 2) +
      "\n\nLast Refresh: " + now;

    if (data.db_error) {

      statusEl.textContent = "Database Error";
      statusEl.className = "status error";

    } else {

      statusEl.textContent = "Backend Ready";
      statusEl.className = "status ok";

    }

  } catch (err) {

    statusEl.textContent = "Backend Not Reachable";
    statusEl.className = "status error";
    outputEl.textContent = err.toString();

  }

}

// refresh every 5 seconds
setInterval(fetchData, 5000);

// first load
fetchData();
