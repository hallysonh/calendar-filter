function filterList(removeTranslations, showOnlyFavorites) {
  days = document.getElementsByClassName('releases');
  for (day of days) {
    for (item of day.children) {
      let favorited = item.getElementsByClassName("queue-flag queued").length > 0;
      let title = item.getElementsByTagName('cite')[0].textContent.toLowerCase();
      let isDub = title.indexOf("dub)") >= 0 || title.indexOf("sian)") >= 0 || title.indexOf("(dub ") >= 0;
      if ((removeTranslations && isDub) || (showOnlyFavorites && !favorited)) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    }
  }
}

function filterListWithUserPreference() {
  chrome.storage.sync.get(
    (items) => filterList(items.removeTranslations, items.showOnlyFavorites)
  );
}

chrome.storage.onChanged.addListener(
  () => filterListWithUserPreference()
);

filterListWithUserPreference();
