// TAB
function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

// VIDEOS
const feed = document.getElementById("feed");

function addVideo(url) {
  const div = document.createElement("div");
  div.className = "video-card";

  let likes = 0;

  div.innerHTML = `
    <video src="${url}" autoplay loop></video>

    <div class="overlay">
      <p>@user</p>
      <p>🔥 Vaal Talk</p>
    </div>

    <div class="actions">
      <button onclick="this.innerText='❤️ '+(++this.dataset.count || 1)">❤️ 0</button>
      <button onclick="alert('Comments coming soon')">💬</button>
    </div>
  `;

  feed.appendChild(div);
}

addVideo("https://www.w3schools.com/html/mov_bbb.mp4");

// UPLOAD
function uploadVideo() {
  const file = videoUpload.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  addVideo(url);
}

// SWIPE EFFECT (basic)
let startY = 0;

document.addEventListener("touchstart", e => startY = e.touches[0].clientY);

document.addEventListener("touchend", e => {
  let endY = e.changedTouches[0].clientY;
  if (startY - endY > 50) window.scrollBy(0, window.innerHeight);
  if (endY - startY > 50) window.scrollBy(0, -window.innerHeight);
});

// COMMUNITIES
let communities = [
  "Sebokeng", "Sharpeville", "Vanderbijlpark", "Vereeniging"
];

let areaVotes = {};

function renderCommunities() {
  communitiesList.innerHTML = "";
  communities.forEach(c => {
    communitiesList.innerHTML += `<div class="community">✅ ${c}</div>`;
  });
}

function voteArea() {
  const name = newArea.value;
  if (!name) return;

  if (!areaVotes[name]) areaVotes[name] = 0;
  areaVotes[name]++;

  renderAreas();
}

function renderAreas() {
  areasList.innerHTML = "";

  for (let area in areaVotes) {
    let votes = areaVotes[area];
    let percent = (votes / 200) * 100;

    if (votes >= 200 && !communities.includes(area)) {
      communities.push(area);
    }

    areasList.innerHTML += `
      <div class="area">
        <p>${area} (${votes}/200)</p>
        <div class="progress">
          <div class="progress-bar" style="width:${percent}%"></div>
        </div>
      </div>
    `;
  }

  renderCommunities();
}

renderCommunities();

// PWA SERVICE WORKER
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
