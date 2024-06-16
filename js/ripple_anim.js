function createRipple(event) {
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const size = Math.max(rect.width, rect.height) * 2;
  ripple.style.width = ripple.style.height = size + "px";
  ripple.style.left = x - size / 2 + "px";
  ripple.style.top = y - size / 2 + "px";
  event.currentTarget.appendChild(ripple);
  setTimeout(() => {
    ripple.style.transform = "scale(2)";
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, 10);
}
