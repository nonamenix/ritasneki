$(document).ready(() => {
  initGrid()
})

function initGrid() {
  const $grid = $('.dream-grid').masonry({
    itemSelector: '.dream-column'
  })

  $grid.imagesLoaded().progress(() => {
    $grid.masonry('layout')
  })
}

function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
