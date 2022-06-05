var hotel = {
    //Properties
    name: 'Hotel Girnar',
    rooms: {
        ac_rooms: 25,
        non_ac_rooms: 35
    },
    booked: {
        ac_rooms: 15,
        non_ac_rooms: 12
    },
    gym: true,
    garden: true,
    roomTypes: ['twin', 'double', 'suit'],

    //Methods
    checkAvailability: function () {
        const available = {
            ac_rooms: this.rooms.ac_rooms - this.booked.ac_rooms,
            non_ac_rooms: this.rooms.non_ac_rooms - this.booked.non_ac_rooms,
        }
        return available;
    },
    availableDetails: function () {
        const available = this.checkAvailability();
        console.log("Available Room Details:");
        console.log("A/C rooms: " + available.ac_rooms);
        console.log("Non A/C rooms: " + available.non_ac_rooms);
    },
    bookAcRoom: function (num = 1) {
        const available_rooms = this.checkAvailability();
        if (available_rooms.ac_rooms >= num) {
            this.rooms.ac_rooms -= num;
            console.log(num + " ac room booked successfully.");
        } else {
            console.log("Sorry, " + num + " A/C rooms not available at this moment!");
            this.availableDetails();
        }
    },
    bookNonAcRoom: function (num = 1) {
        const available_rooms = this.checkAvailability();
        if (available_rooms.non_ac_rooms >= num) {
            this.rooms.non_ac_rooms -= num;
            console.log(num + " non ac room booked successfully.");
        } else {
            console.log("Sorry, " + num + " Non A/C rooms available at this moment!");
            this.availableDetails();

        }
    }
}

console.log("Hotel Name: " + hotel.name);
console.log("total rooms: " + (hotel.rooms.ac_rooms + hotel.rooms.non_ac_rooms));
console.log("total a/c rooms: " + hotel.rooms.ac_rooms);
console.log("total non a/c rooms: " + hotel.rooms.non_ac_rooms);
console.log("room types: " + hotel.roomTypes);
console.log("is GYM available: " + hotel.gym);
console.log("is garden available: " + hotel.garden);
hotel.bookAcRoom(12);
hotel.bookNonAcRoom(14);
hotel.bookNonAcRoom(14);
