
const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // Remove active state from all tabs
    tabs.forEach(item => {
      item.classList.remove("active");
    });

    // Hide all pages
    pages.forEach(page => {
      page.classList.remove("active");
    });

    // Activate selected tab and page
    tab.classList.add("active");

    const pageId = tab.dataset.tab;
    document.getElementById(pageId).classList.add("active");

  });
});
