(function() {
  function removeThemeEntries() {
    const ninja = document.querySelector('ninja-keys');
    if (ninja && ninja.data) {
      ninja.data = ninja.data.filter(function(item) {
        return item.section !== 'Theme' && item.section !== 'News';
      });
    }
  }
  if (document.readyState === 'complete') {
    removeThemeEntries();
  } else {
    document.addEventListener('readystatechange', function() {
      if (document.readyState === 'complete') {
        removeThemeEntries();
      }
    });
  }
})();
