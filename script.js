// TAB
function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });
  document.getElementById(tabId).classList.add("active");
}

// VIDEO FEED
const feed = document.getElementById("feed");

function addVideo(url, user, caption) {
  const div = document.createElement("div");
  div.className = "video-card";

  div.innerHTML = `
    <video src="${url}" autoplay loop controls></video>
    <div class="overlay">
      <p>@${user}</p>
      <p>${caption}</p>
    </div>
  `;

  feed.appendChild(div);
}

addVideo("https://www.w3schools.com/html/mov_bbb.mp4", "user1", "🔥 Welcome");
addVideo("https://www.w3schools.com/html/movie.mp4", "user2", "😂 Funny");

// UPLOAD
function uploadVideo() {
  const file = document.getElementById("videoUpload").files[0];
  if (!file) return alert("Select video");

  const url = URL.createObjectURL(file);
  addVideo(url, "you", "New upload");
}

// AUTH
function signup() {
  const u = username.value;
  const p = password.value;
  localStorage.setItem(u, p);
  alert("Registered");
}

function login() {
  if (localStorage.getItem(username.value) === password.value) {
    alert("Logged in");
  } else alert("Wrong details");
}

// KASI MALL
function addProduct() {
  const name = productName.value;
  const price = productPrice.value;
  const file = productImage.files[0];

  if (!name || !price || !file) return alert("Fill all");

  const url = URL.createObjectURL(file);

  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `<img src="${url}" width="100"><p>${name} - R${price}</p>`;

  storeProducts.appendChild(div);
}

// COMMUNITIES
const communities = [
  { name: "Vaal", users: 120 },
  { name: "Rust-Ter-Vaal", users: 30 },
  { name: "Roshnee", users: 60 },
  { name: "Meyerton", users: 80 }
];

function renderCommunities() {
  communitiesList.innerHTML = "";

  communities.forEach((c, i) => {
    const percent = (c.users / 500) * 100;

    const div = document.createElement("div");
    div.className = "community";

    div.innerHTML = `
      <h3>${c.name}</h3>
      <p>${c.users}/500 members</p>

      <div class="progress">
        <div class="progress-bar" style="width:${percent}%"></div>
      </div>

      <button onclick="joinCommunity(${i})">Join</button>

      <p>${c.users >= 500 ? "✅ Open" : "🔒 Locked"}</p>
      <p>${c.users >= 50 ? "⏳ Countdown started" : ""}</p>
    `;

    communitiesList.appendChild(div);
  });
}

function joinCommunity(i) {
  communities[i].users++;
  renderCommunities();
}

renderCommunities();

// JOBS
function addJob() {
  const title = jobTitle.value;
  const company = companyName.value;

  const div = document.createElement("div");
  div.className = "job";
  div.innerHTML = `<p>${title} - ${company}</p>`;

  jobsList.appendChild(div);
}

// QUICK JOBS
function addQuickJob() {
  const text = quickJobText.value;

  const div = document.createElement("div");
  div.className = "quick-job";
  div.innerHTML = `<p>${text}</p>`;

  quickJobsList.appendChild(div);
}
