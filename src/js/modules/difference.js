export default class Difference {
    constructor (oldofficer, newofficer, items) {
        try {
            this.oldofficer = document.querySelector(oldofficer);
            this.newofficer = document.querySelector(newofficer);
            this.oldItems = this.oldofficer.querySelectorAll(items);
            this.newItems = this.newofficer.querySelectorAll(items)
            this.items = items;
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch (e){}
    }

    bintTriggers(container, items, counter) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                counter +=1;
            } else {
                items[counter].style.display = 'flex';
                items[counter+1].remove();
            }
            
        });

        // this.newofficer.querySelector('.plus').addEventListener('click', () => {
        //     if (this.newCounter !== this.newItems.length - 2) {
        //         this.newItems[this.newCounter].style.display = 'flex';
        //         this.newCounter +=1;
        //     } else {
        //         this.newItems[this.newCounter].style.display = 'flex';
        //         this.newItems[this.newCounter+1].remove();
        //     }
            
        // });
    }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i != arr.length - 1) {
                item.style.display = 'none';
            }
        });
    }

    init() {
        try {
            this.hideItems(this.oldItems);
            this.hideItems(this.newItems);
            this.bintTriggers(this.oldofficer, this.oldItems, this.oldCounter);
            this.bintTriggers(this.newofficer, this.newItems, this.newCounter);
        } catch(e) {}
    }
}