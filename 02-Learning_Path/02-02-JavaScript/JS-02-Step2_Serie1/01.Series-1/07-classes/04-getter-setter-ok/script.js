// 07-classes/04-getter-setter/script.js - 7.4: getter & setter

// Explanation https://www.jackfranklin.co.uk/blog/es5-getters-setters/

(() => {
    document.getElementById('run').addEventListener('click', () => {
        class Person {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
            get name() {
                return(this.firstname + " " + this.lastname);
            }
            set name(fullname) {
                let separation = fullname.split (' ');
                this.firstname = separation[0];
                this.lastname = separation[1];
            }
        }
        let newOne = new Person('Bill', 'Boquet');
        console.log(newOne);
        newOne.name = 'Brick Brock';
        console.log(newOne);
    })
})()
