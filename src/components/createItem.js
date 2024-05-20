/**
 * Create an article element.
 * 
 * @param {object} item - The item object data. 
 * @returns {HTMLElement} - The item element.
 */

const createItem = (item) => {

    // Create Article
    const article = document.createElement('article');
    article.classList.add('menu-item', item.category);
    article.style.viewTransitionName = `item-${item.id}`;

    // Create Media Wrapper
    const mediaWrapper = document.createElement('div');
    mediaWrapper.className = 'media-wrapper';

    // Create Image
    const img = document.createElement('img');
    img.className = 'img';
    img.src = item.src;
    img.alt = item.title;

    // Create Category Pill
    const categoryPill = document.createElement('p');
    categoryPill.className = 'pill';
    categoryPill.innerText = item.category;

    mediaWrapper.append(img, categoryPill);

    // Create Content Wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'content-wrapper';

    // Create Item Header
    const itemHeader = document.createElement('div');
    itemHeader.className = 'item-header';

    // Create Item Title
    const itemTitle = document.createElement('h3');
    itemTitle.className = 'item-title';
    itemTitle.innerText = item.title;

    // Create Item Price
    const itemPrice = document.createElement('p');
    itemPrice.className = 'item-price';
    itemPrice.innerText = item.price;

    itemHeader.append(itemTitle, itemPrice);

    // Create Item Description
    const itemDescription = document.createElement('p');
    itemDescription.className = 'item-description';
    itemDescription.innerText = item.desc;

    contentWrapper.append(itemHeader, itemDescription);
    article.append(mediaWrapper, contentWrapper);

    return article;
}

export default createItem;