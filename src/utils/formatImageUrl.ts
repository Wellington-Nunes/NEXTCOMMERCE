const formatImageUrl = (url: string): string => {
    if (!url) return "";

    let formattedUrl = url.trim().replace(/ /g, "%20");

    if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
        formattedUrl = `https://${formattedUrl}`;
    }

    return formattedUrl;
};

export default formatImageUrl;