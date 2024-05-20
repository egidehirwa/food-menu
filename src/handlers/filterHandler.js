const filterHandler = (id) => {
    const menuItems = document.querySelectorAll('.menu-item');

    function filterFood() {
        menuItems.forEach((item) => {
            if (id === 'all') {
                item.classList.remove('hide');
            } else if (item.classList.contains(id)) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        })
    }

    if ('startViewTransition' in document) {
        document.startViewTransition(() => {
            filterFood();
        })
    } else {
        filterFood();
    }

}

export default filterHandler;