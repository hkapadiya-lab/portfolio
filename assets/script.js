function toggleGallery(id) {
    const gallery = document.getElementById(id);
    if (gallery.classList.contains('hide')) {
        gallery.classList.remove('hide');
    } else {
        gallery.classList.add('hide');
    }
}
