const { Command } = window.__TAURI__.shell;

let greetMsgEl;

window.addEventListener("DOMContentLoaded", () => {
  greetMsgEl = document.querySelector("#greet-msg");
});

document.querySelector("#greet-btn").addEventListener("click", greet);

async function greet() {
  const command = Command.sidecar("bin/python/test");
  const output = await command.execute();
  const { stdout, stderr } = output;

  greetMsgEl.textContent = "Hello " + stdout;
}

window.greet = greet;
