// Saves options to chrome.storage
const saveOptions = () => {
  const translations = document.getElementById('translations').checked;
  const favorites = document.getElementById('favorites').checked;
  chrome.storage.sync.set({
    removeTranslations: translations,
    showOnlyFavorites: favorites,
  });
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    (items) => {
      document.getElementById('translations').checked = items.removeTranslations;
      document.getElementById('favorites').checked = items.showOnlyFavorites;
    }
  );
};

const openCalendar = () => {
  window.open("https://www.crunchyroll.com/simulcastcalendar", "_blank");
}

document.addEventListener('DOMContentLoaded', restoreOptions);

document.getElementById('open-calendar').addEventListener('click', openCalendar);
document.getElementById('translations').addEventListener('change', saveOptions);
document.getElementById('favorites').addEventListener('change', saveOptions);