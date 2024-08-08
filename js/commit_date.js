async function getLastCommitDate() {
  const owner = "aechat";
  const repo = "links";

  const currentUrl = window.location.pathname;
  const filePath = currentUrl.startsWith("/") ? currentUrl.substring(1) : currentUrl;

  const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const commits = await response.json();
    if (commits.length === 0) {
      document.getElementById("commit_date").textContent =
        "Дата изменения\nвременно недоступна";
      return;
    }
    const lastCommitDate = new Date(commits[0].commit.author.date);
    document.getElementById("commit_date").textContent =
      "Дата последнего изменения:\n" + lastCommitDate.toLocaleString();
  } catch (error) {
    document.getElementById("commit_date").textContent =
      "Ошибка получения даты!\n" + error;
  }
}

getLastCommitDate();
