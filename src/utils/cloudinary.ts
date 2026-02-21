export const CLOUD_NAME = 'dzuua38cd';

export function getCloudinaryUrl(
    path: string,
    options?: {
        width?: number;
        quality?: number | 'auto';
        format?: 'auto' | 'webp' | 'jpg';
    }
) {
    const {
        width,
        quality = 'auto',
        format = 'auto',
    } = options || {};

    let transforms = `q_${quality},f_${format}`;
    if (width) transforms += `,w_${width},c_scale`;

    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${path}`;
}
