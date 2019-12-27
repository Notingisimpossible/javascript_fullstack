declare abstract class Animal {
    abstract makeSound(): void;
    move(): void;
}
declare class Cat extends Animal {
    run(): void;
    private eat;
    protected sleep(): void;
    makeSound(): void;
}
declare class GTR extends Cat {
    init(): void;
}
declare const animal: Cat;
