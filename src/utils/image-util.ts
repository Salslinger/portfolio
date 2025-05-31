function getImageUrl(name: string, fileType: string): string {
    const fileName = name.toLowerCase().replace(/\s/g, "-");
    return new URL(`../assets/${fileName}.${fileType}`, import.meta.url).href;
}

export {getImageUrl};