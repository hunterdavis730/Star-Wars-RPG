var opponentSelected = false;
var fighter = "";
var user = "";

// I want to push current fighter objects and current user objects into the above variables 

// darth maul object
var darthMaul = {
    healthPoints: 150,
    attackPower: 7,
    counterAttack: 23,
    isUser: false,
    isFighting: false,
    isVillian: true,
    currentOpponent: false,

    attackMulti: function () {
        this.attackPower += 7;
    },

    selectCharacter: function () {
        this.isUser = true;
        this.isFighting = true;
        $('#villain-row').addClass('d-none');
        $('#darth-maul').removeClass('d-none');
        $('#choose-side').empty();
        $('.side-buttons').addClass('d-none');
        var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
        $('#choose-side').append(verse);
    },

    selectedOpp: function () {
        isFighting = true;
        currentOpponent = true;
        $('#opp-darth-maul').removeClass('d-none');
    },





}

// Boba Fett Object 
var bobaFett = {
    healthPoints: 180,
    attackPower: 5,
    counterAttack: 18,
    isUser: false,
    isFighting: false,
    isVillian: true,
    currentOpponent: false,

    attackMulti: function () {
        this.attackPower += 5;
    },

    selectCharacter: function () {
        this.isUser = true;
        this.isFighting = true;
        $('#villain-row').addClass('d-none');
        $('#boba-fett').removeClass('d-none');
        $('#choose-side').empty();
        $('.side-buttons').addClass('d-none');
        var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
        $('#choose-side').append(verse);
    },

    selectedOpp: function () {
        isFighting = true;
        currentOpponent = true;
        $('#opp-boba-fett').removeClass('d-none');
    },
}

// Mace Windu Object
var maceWindu = {
    healthPoints: 150,
    attackPower: 7,
    counterAttack: 23,
    isUser: false,
    isFighting: false,
    isHero: true,
    currentOpponent: false,

    attackMulti: function () {
        this.attackPower += 7;
    },

    selectCharacter: function () {
        this.isUser = true;
        this.isFighting = true;
        $('#hero-row').addClass('d-none');
        $('#mace-windu').removeClass('d-none');
        $('#choose-side').empty();
        $('.side-buttons').addClass('d-none');
        var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
        $('#choose-side').append(verse);
    },

    selectedOpp: function () {
        isFighting = true;
        currentOpponent = true;
        $('#opp-mw').removeClass('d-none');
    },
}

// Kylo Ren Object 
var kyloRen = {
    healthPoints: 125,
    attackPower: 9,
    counterAttack: 30,
    isUser: false,
    isFighting: false,
    isVillian: true,
    currentOpponent: false,

    attackMulti: function () {
        this.attackPower += 9;
    },

    selectCharacter: function () {
        this.isUser = true;
        this.isFighting = true;
        $('#villain-row').addClass('d-none');
        $('#kylo-ren').removeClass('d-none');
        $('#choose-side').empty();
        $('.side-buttons').addClass('d-none');
        var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
        $('#choose-side').append(verse);
    },

    selectedOpp: function () {
        isFighting = true;
        currentOpponent = true;
        $('#opp-kylo-ren').removeClass('d-none');
    },
}

// Qui-Gon Jinn Object
var quiGon = {
    healthPoints: 125,
    attackPower: 9,
    counterAttack: 30,
    isUser: false,
    isFighting: false,
    isHero: true,
    currentOpponent: false,

    attackMulti: function () {
        this.attackPower += 9;
    },

    selectCharacter: function () {
        this.isUser = true;
        this.isFighting = true;
        $('#hero-row').addClass('d-none');
        $('#qui-gon').removeClass('d-none');
        $('#choose-side').empty();
        $('.side-buttons').addClass('d-none');
        var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
        $('#choose-side').append(verse);
    },

    selectedOpp: function () {
        isFighting = true;
        currentOpponent = true;
        $('#opp-qui-gon').removeClass('d-none');
    },
}

// Han Solo Object 
var hanSolo = {
    healthPoints: 180,
    attackPower: 5,
    counterAttack: 18,
    isUser: false,
    isFighting: false,
    isHero: true,
    currentOpponent: false,

    attackMulti: function () {
        this.attackPower += 5;
    },

    selectCharacter: function () {
        this.isUser = true;
        this.isFighting = true;
        $('#hero-row').addClass('d-none');
        $('#han-solo').removeClass('d-none');
        $('#choose-side').empty();
        $('.side-buttons').addClass('d-none');
        var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
        $('#choose-side').append(verse);
    },

    selectedOpp: function () {
        isFighting = true;
        currentOpponent = true;
        $('#opp-han-solo').removeClass('d-none');
    },
}

var displayVillains = function () {
    $('#opponent-villain').removeClass('d-none');
}

var displayHeros = function () {
    $('#opponent-hero').removeClass('d-none');
}

$(document).ready(function () {


    $('#hero-button').on('click', function () {
        $('#villain-row').addClass('d-none');
        $('#hero-row').removeClass('d-none');
    })

    $('#villain-button').on('click', function () {
        $('#hero-row').addClass('d-none');
        $('#villain-row').removeClass('d-none');
    })

    $('#select-maul').on('click', function () {
        darthMaul.selectCharacter();
        displayHeros();
    })

    $('#select-ren').on('click', function () {
        kyloRen.selectCharacter();
        displayHeros();

    })

    $('#select-fett').on('click', function () {
        bobaFett.selectCharacter();
        displayHeros();
    })

    $('#select-windu').on('click', function () {
        maceWindu.selectCharacter();
        displayVillains();
    })

    $('#select-solo').on('click', function () {
        hanSolo.selectCharacter();
        displayVillains();
    })

    $('#select-jinn').on('click', function () {
        quiGon.selectCharacter();
        displayVillains();



    })


    $('#choose-maul').on('click', function () {
        event.preventDefault();
        if (opponentSelected === false) {
            $('#choose-side').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).empty();
            darthMaul.selectedOpp();

        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }
        console.log(darthMaul.currentOpponent)

    })

    $('#choose-ren').on('click', function () {
        event.preventDefault();

        if (opponentSelected === false) {
            $('#choose-side').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).empty();
            kyloRen.selectedOpp()
        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }
    })

    $('#choose-fett').on('click', function () {
        event.preventDefault();

        if (opponentSelected === false) {
            $('#choose-side').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).empty();
            bobaFett.selectedOpp();
        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }
    })

    $('#choose-windu').on('click', function () {
        event.preventDefault();
        if (opponentSelected === false) {
            $('#choose-side').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).empty();
            maceWindu.selectedOpp()
        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }
    })

    $('#choose-solo').on('click', function () {
        event.preventDefault();
        if (opponentSelected === false) {
            $('#choose-side').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).empty();
            hanSolo.selectedOpp()
        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }
    })

    $('#choose-jinn').on('click', function () {
        event.preventDefault();
        if (opponentSelected === false) {
            $('#choose-side').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).empty();
            quiGon.selectedOpp()
        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }
    })


















})