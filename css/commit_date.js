async function getLastCommitDate() {
  const owner = "aechat";
  const repo = "pages";

  const currentUrl = window.location.pathname;
  const filePath = currentUrl.startsWith("/")
    ? currentUrl.substring(1)
    : currentUrl;

  const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    const commits = await response.json();
    if (commits.length === 0) {
      document.getElementById("commit_date").textContent =
        "Дата изменения пока-что недоступна";
      return;
    }
    const lastCommitDate = new Date(commits[0].commit.author.date);
    document.getElementById("commit_date").textContent =
      "Дата последнего изменения:" + lastCommitDate.toLocaleString();
  } catch (error) {
    console.error("Ошибка получения данных:", error);
    document.getElementById("commit_date").textContent =
      "Ошибка загрузки данных";
  }
}

getLastCommitDate();
