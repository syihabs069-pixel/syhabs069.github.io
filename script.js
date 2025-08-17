const love = 
document.getElementById("love");
const msg =
 document.getElementById("msg");

love.addEventListener("click", () => {
  // tambahkan class animasi
  love.classList.add("animate");

  // hapus animasi setelah selesai biar bisa diklik lagi
  setTimeout(() => {
    love.classList.remove("animate");
  }, 600);

 // tampilkan pesan
  msg.style.display = "block";

  // efek love beterbangan
  createFlyingLove();
});

function createFlyingLove() {
  const flyingLove = document.createElement("span");
  flyingLove.textContent = "❤";
  flyingLove.classList.add("flying-love");
  document.body.appendChild(flyingLove);

 // posisi random di sekitar LOVE utama
  flyingLove.style.left = (love.offsetLeft + Math.random() * 100 - 50) + "px";
  flyingLove.style.top = (love.offsetTop - 20) + "px";

  // hilangkan setelah animasi selesai
  setTimeout(() => {
    flyingLove.remove();
  }, 2000);
}