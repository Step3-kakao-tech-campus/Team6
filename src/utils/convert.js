export const comma = (num) => {
    if (num === undefined) return 0;
    if (typeof num === "string") num = parseInt(num, 10);
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const toUpperCaseFirstWord = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const toUpperCaseFirstWordAll = (str) => {
    return str.split(' ').map((word) => {
        return toUpperCaseFirstWord(word);
    }).join(' ');
}

export const imagesToSlides = (images) => {
    return images.map((image) => ({
        image: image,
    }));
}