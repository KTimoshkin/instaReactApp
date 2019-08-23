export default class InstaService{
    constructor() {
        this._apiBase = 'http://localhost:3000/';
    }

    getResource = async(url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return res.json();
    }

    getAllPosts = async() => {
        const res = await this.getResource('posts/');
        return res;
    }

    getAllPhotos = async() => {
        const res = await this.getResource('posts/');
        return res.map(this._transformPost);
    }

    getAllUsers = async() => {
        const res = await this.getResource('posts/');
        return res.map(this._transformPost);
    }

    _transformPost = (post) => {
        return{
            src: post.src,
            alt: post.alt,
            name: post.name,
            altname: post.altname,
            photo: post.photo,
            id: post.id
        }
    }
}