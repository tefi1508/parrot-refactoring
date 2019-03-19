import { African, Norwegian_Blue, European } from '../parrot';

describe("Parrot", function () {
    test("get speed of european parrot", function () {
        const parrot = new European(0, 0, false);

        expect(parrot.getSpeed()).toBe(12);
    });

    test("get speed of african parrot with one coconut", function () {
        const parrot = new African(1, 0, false);

        expect(parrot.getSpeed()).toBe(3);
    });

    test("get speed of african parrot with two coconuts", function () {
        const parrot = new African(2, 0, false);

        expect(parrot.getSpeed()).toBe(0);
    });

    test("get speed of african parrot with no coconuts", function () {
        const parrot = new African(0, 0, false);

        expect(parrot.getSpeed()).toBe(12);
    });

    test("get speed norwegian blue parrot nailed", function () {
        const parrot = new Norwegian_Blue(0, 1.5, true);

        expect(parrot.getSpeed()).toBe(0);
    });

    test("get speed norwegian blue parrot not nailed", function () {
        const parrot = new Norwegian_Blue(0, 1.5, false);

        expect(parrot.getSpeed()).toBe(18);
    });

    test("get speed norwegian blue parrot not nailed high voltage", function () {
        const parrot = new Norwegian_Blue(0, 4, false);

        expect(parrot.getSpeed()).toBe(24);
    });
});
