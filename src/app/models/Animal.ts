export class Animal {
    /**
     *
     */
    constructor() {
        this.id = 0;
        this.name = '';
        this.nickname = '';
        this.age = 0;
        this.chipNumber = 0;        
    }

    id!: Number;
    name!: string;
    nickname!: string;
    age!: Number;
    chipNumber!: Number;
    // owner!: string;
}