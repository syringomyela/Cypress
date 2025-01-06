class Utilities {
    constructor(page) {
        this.page = page; 
    }

    getRandomInputData(length) {
        return  Math.random().toString(36).substring(2, length);
    }
    
    getRandomEmail(length) {
        return Math.random().toString(36).substring(2, length) + '@mail.com';
    }
}

export default new Utilities();