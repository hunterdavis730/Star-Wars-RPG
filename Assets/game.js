var opponentSelected = false;
var fighter = "";
var user = "";
var startBattle = false;
var enemiesDefeated = 0;
// add one to this variable each time you defeat an opponent and then create a function with a conditional statement that activates game over when enemiesDefeated === 0


var healthQuestions = [1, 2, 3, 4];

var currentQuestion = healthQuestions[Math.floor(Math.random() * healthQuestions.length)];









// I want to push current fighter objects and current user objects into the above variables 

// darth maul object
var darthMaul = {
    name: 'Darth Maul',
    healthPoints: 150,
    currentDamage: 0,
    attackPower: [7, 15, 25, 9, 18, 11, ],
    rangedAttack: [10, 12, 15],
    rangedCounter: [6, 9, 12, 14],
    counterAttack: [9, 10, 12, 14, 15, 17, ],
    initializeAttack: false,
    isUser: false,
    isFighting: false,
    isVillian: true,
    currentOpponent: false,

    attackMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.attackPower[Math.floor(Math.random() * this.attackPower.length)]
        } else {
            this.currentDamage = this.counterAttack[Math.floor(Math.random() * this.counterAttack.length)]
        }
        this.initializeAttack = true;
    },

    rangedMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.rangedAttack[Math.floor(Math.random() * this.rangedAttack.length)]
        } else {
            this.currentDamage = this.rangedCounter[Math.floor(Math.random() * this.rangedCounter.length)]
        }
        this.initializeAttack = true;
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

    displayStats: function () {
        if (this.isUser) {
            $('#darth-maul .health').html(this.healthPoints);
        } else {
            $('#opp-darth-maul .health').html(this.healthPoints);
            $('#opp-darth-maul .counter').html(this.currentDamage);
        }


    },

    attack: function () {


        if (this.isFighting && this.initializeAttack) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 mb-2 text center text-white').append('<div>' + `Your attack damaged ${fighter.name} ${this.currentDamage} points.` + '</div>')

        }
    },


    counter: function () {
        if (this.healthPoints <= 0) {
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-darth-maul').addClass('d-none');
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
            $('#choose-side').append(verse);


        } else {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<p>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</p>')
        }
    },







}

// Boba Fett Object 
var bobaFett = {
    name: 'Boba Fett',
    healthPoints: 180,
    currentDamage: 0,
    attackPower: [7, 15, 25, 9, 18, 11, ],
    rangedAttack: [10, 12, 15],
    rangedCounter: [6, 9, 12, 14],
    counterAttack: [9, 10, 12, 14, 15, 17, ],
    initializeAttack: false,
    isUser: false,
    isFighting: false,
    isVillian: true,
    currentOpponent: false,

    attackMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.attackPower[Math.floor(Math.random() * this.attackPower.length)]
        } else {
            this.currentDamage = this.counterAttack[Math.floor(Math.random() * this.counterAttack.length)]
        }
        this.initializeAttack = true;
    },

    rangedMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.rangedAttack[Math.floor(Math.random() * this.rangedAttack.length)]
        } else {
            this.currentDamage = this.rangedCounter[Math.floor(Math.random() * this.rangedCounter.length)]
        }
        this.initializeAttack = true;
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

    displayStats: function () {
        if (this.isUser) {
            $('#boba-fett .health').html(this.healthPoints);
        } else {
            $('#opp-boba-fett .health').html(this.healthPoints);
            $('#opp-boba-fett .counter').html(this.currentDamage);
        }


    },

    attack: function () {


        if (this.isFighting && this.initializeAttack) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 mb-2 text center text-white').append('<div>' + `Your attack damaged ${fighter.name} ${this.currentDamage} points.` + '</div>')

        }
    },


    counter: function () {
        if (this.healthPoints <= 0) {
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-boba-fett').addClass('d-none');
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
            $('#choose-side').append(verse);


        } else {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<br>').append('<p>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</p>')
        }
    },

}

// Mace Windu Object
var maceWindu = {
    name: 'Mace Windu',
    healthPoints: 150,
    currentDamage: 0,
    attackPower: [7, 15, 25, 9, 18, 11, ],
    rangedAttack: [10, 12, 15],
    rangedCounter: [6, 9, 12, 14],
    counterAttack: [9, 10, 12, 14, 15, 17, ],
    initializeAttack: false,
    isUser: false,
    isFighting: false,
    isHero: true,
    currentOpponent: false,

    attackMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.attackPower[Math.floor(Math.random() * this.attackPower.length)]
        } else {
            this.currentDamage = this.counterAttack[Math.floor(Math.random() * this.counterAttack.length)]
        }
        this.initializeAttack = true;
    },

    rangedMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.rangedAttack[Math.floor(Math.random() * this.rangedAttack.length)]
        } else {
            this.currentDamage = this.rangedCounter[Math.floor(Math.random() * this.rangedCounter.length)]
        }
        this.initializeAttack = true;
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

    displayStats: function () {
        if (this.isUser) {
            $('#mace-windu .health').html(this.healthPoints);
        } else {
            $('#opp-mw .health').html(this.healthPoints);
            $('#opp-mw .counter').html(this.currentDamage);
        }


    },

    attack: function () {


        if (this.isFighting && this.initializeAttack) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 text center').text(`Your attack damaged ${fighter.name} ${this.currentDamage} points.`)

        }
    },

    counter: function () {
        if (this.healthPoints <= 0) {
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-mw').addClass('d-none');
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
            $('#choose-side').append(verse);

        } else {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<br>').append('<div>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</div>')
        }
    },
}

// Kylo Ren Object 
var kyloRen = {
    name: 'Kylo Ren',
    healthPoints: 125,
    currentDamage: 0,
    attackPower: [7, 15, 25, 9, 18, 11, ],
    rangedAttack: [10, 12, 15],
    rangedCounter: [6, 9, 12, 14],
    counterAttack: [9, 10, 12, 14, 15, 17, ],
    initializeAttack: false,
    isUser: false,
    isFighting: false,
    isVillian: true,
    currentOpponent: false,

    attackMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.attackPower[Math.floor(Math.random() * this.attackPower.length)]
        } else {
            this.currentDamage = this.counterAttack[Math.floor(Math.random() * this.counterAttack.length)]
        }
        this.initializeAttack = true;
    },

    rangedMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.rangedAttack[Math.floor(Math.random() * this.rangedAttack.length)]
        } else {
            this.currentDamage = this.rangedCounter[Math.floor(Math.random() * this.rangedCounter.length)]
        }
        this.initializeAttack = true;
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

    displayStats: function () {
        if (this.isUser) {
            $('#kylo-ren .health').html(this.healthPoints);
        } else {
            $('#opp-kylo-ren .health').html(this.healthPoints);
            $('#opp-kylo-ren .counter').html(this.currentDamage);
        }


    },

    attack: function () {


        if (this.isFighting && this.initializeAttack) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 mb-2 text center text-white').append('<div>' + `Your attack damaged ${fighter.name} ${this.currentDamage} points.` + '</div>')

        }
    },


    counter: function () {
        if (this.healthPoints <= 0) {
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-kylo-ren').addClass('d-none');
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
            $('#choose-side').append(verse);


        } else {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<br>').append('<p>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</p>')
        }
    },

}

// Qui-Gon Jinn Object
var quiGon = {
    name: 'Qui-Gon Jinn',
    healthPoints: 125,
    currentDamage: 0,
    attackPower: [7, 15, 25, 9, 18, 11, ],
    rangedAttack: [10, 12, 15],
    rangedCounter: [6, 9, 12, 14],
    counterAttack: [9, 10, 12, 14, 15, 17, ],
    initializeAttack: false,
    isUser: false,
    isFighting: false,
    isHero: true,
    currentOpponent: false,

    attackMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.attackPower[Math.floor(Math.random() * this.attackPower.length)]
        } else {
            this.currentDamage = this.counterAttack[Math.floor(Math.random() * this.counterAttack.length)]
        }
        this.initializeAttack = true;
    },

    rangedMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.rangedAttack[Math.floor(Math.random() * this.rangedAttack.length)]
        } else {
            this.currentDamage = this.rangedCounter[Math.floor(Math.random() * this.rangedCounter.length)]
        }
        this.initializeAttack = true;
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

    displayStats: function () {
        if (this.isUser) {
            $('#qui-gon .health').html(this.healthPoints);
        } else {
            $('#opp-qui-gon .health').html(this.healthPoints);
            $('#opp-qui-gon .counter').html(this.currentDamage);
        }


    },

    attack: function () {


        if (this.isFighting && this.initializeAttack) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 mb-2 text center text-white').append('<div>' + `Your attack damaged ${fighter.name} ${this.currentDamage} points.` + '</div>')

        }
    },


    counter: function () {
        if (this.healthPoints <= 0) {
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-qui-gon').addClass('d-none');
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
            $('#choose-side').append(verse);


        } else {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<br>').append('<p>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</p>')
        }
    },

}

// Han Solo Object 
var hanSolo = {
    name: 'Han Solo',
    healthPoints: 180,
    currentDamage: 0,
    attackPower: [7, 15, 25, 9, 18, 11, ],
    rangedAttack: [10, 12, 15],
    rangedCounter: [6, 9, 12, 14],
    counterAttack: [9, 10, 12, 14, 15, 17, ],
    initializeAttack: false,
    isUser: false,
    isFighting: false,
    isHero: true,
    currentOpponent: false,

    attackMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.attackPower[Math.floor(Math.random() * this.attackPower.length)]
        } else {
            this.currentDamage = this.counterAttack[Math.floor(Math.random() * this.counterAttack.length)]
        }
        this.initializeAttack = true;
    },

    rangedMulti: function () {
        if (this.isUser) {
            this.currentDamage = this.rangedAttack[Math.floor(Math.random() * this.rangedAttack.length)]
        } else {
            this.currentDamage = this.rangedCounter[Math.floor(Math.random() * this.rangedCounter.length)]
        }
        this.initializeAttack = true;
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

    displayStats: function () {
        if (this.isUser) {
            $('#han-solo .health').html(this.healthPoints);
        } else {
            $('#opp-han-solo .health').html(this.healthPoints);
            $('#opp-han-solo .counter').html(this.currentDamage);
        }


    },

    attack: function () {


        if (this.isFighting && this.initializeAttack) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 mb-2 text center text-white').append('<div>' + `Your attack damaged ${fighter.name} ${this.currentDamage} points.` + '</div>')

        }
    },


    counter: function () {
        if (this.healthPoints <= 0) {
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-han-solo').addClass('d-none');
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
            $('#choose-side').append(verse);


        } else {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<br>').append('<p>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</p>')
        }
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
        user = darthMaul;
        user.displayStats();
    })

    $('#select-ren').on('click', function () {
        kyloRen.selectCharacter();
        displayHeros();
        user = kyloRen;
        user.displayStats();
    })

    $('#select-fett').on('click', function () {
        bobaFett.selectCharacter();
        displayHeros();
        user = bobaFett;
        user.displayStats();
    })

    $('#select-windu').on('click', function () {
        maceWindu.selectCharacter();
        displayVillains();
        user = maceWindu;
        user.displayStats();
    })

    $('#select-solo').on('click', function () {
        hanSolo.selectCharacter();
        displayVillains();
        user = hanSolo;
        user.displayStats();
    })

    $('#select-jinn').on('click', function () {
        quiGon.selectCharacter();
        displayVillains();
        user = quiGon;
        user.displayStats();
        console.log(user)
    })


    $('#choose-maul').on('click', function () {
        event.preventDefault();
        if (opponentSelected === false) {
            $('#choose-side').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).empty();
            fighter = darthMaul;
            darthMaul.selectedOpp();

        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }
        if (opponentSelected) {

            fighter.displayStats();

        }

    })

    $('#choose-ren').on('click', function () {
        event.preventDefault();

        if (opponentSelected === false) {
            $('#choose-side').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).empty();
            fighter = kyloRen;
            kyloRen.selectedOpp()
        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }

        if (opponentSelected) {

            fighter.displayStats();

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
            fighter = bobaFett;
        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }

        if (opponentSelected) {

            fighter.displayStats();

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
            fighter = maceWindu;
        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }

        if (opponentSelected) {

            fighter.displayStats();

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
            fighter = hanSolo;
        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }

        if (opponentSelected) {

            fighter.displayStats();

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
            fighter = quiGon;
        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }
        console.log(opponentSelected)
        console.log(user)
        console.log(fighter)
        if (opponentSelected) {

            fighter.displayStats();

        }
    });


    $('.attack').on('click', function () {
        user.attackMulti();
        fighter.attackMulti();
        console.log(user.currentDamage)
        console.log(fighter.currentDamage)
        user.attack();
        fighter.counter();

        fighter.displayStats()
        user.displayStats()

    })

    $('.ranged').on('click', function () {
        user.rangedMulti();
        fighter.rangedMulti();
        user.attack();
        fighter.counter();
        fighter.displayStats();
        user.displayStats();
    })



















})