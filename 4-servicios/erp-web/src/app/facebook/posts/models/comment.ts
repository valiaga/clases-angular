export class Comment {
    constructor(
        public postId: number,
        public name: string,
        public id?: string,
        public email?: string,
        public body?: string,
    ) { } 
}