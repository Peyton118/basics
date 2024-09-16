function experience(year){

    if (year == 0) {
        return "Beginner"
    }

    else if (year == 1) {
        return "Beginner"
    }

    else if (year == 2) {
        return "Intermediate"
    }

    else if (year == 3) {
        return "Intermediate"
    }

    else if (year == 4) {
        return "Advanced"
    }

    else if (year == 5) {
        return "Advanced"
    }

    else if (year == 6) {
        return "Advanced"
    }

    else if (year >= 7) {
        return "Master"
    }
}

function hasSkill(skills){
    if (skills.includes("Javascript")) {
        return true
    }

    else if (skills != "Javascript") {
        return false
    }
}

var address = {
    street: '',
    number: 1111,
    neighborhood: '',
    city: '',
    state: '',
    zip_code: 11111,

}

function formatAddress(address) {
    var address = `Hello, my address is ${address.number} ${address.street}, ${address.city}, ${address.state} ${address.zip_code} in the ${address.neighborhood.toLowerCase()} neighborhood.`
    return address
}