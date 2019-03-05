var opponentSelected = false;
var fighter = "";
var user = "";
var enemiesDefeated = 0;
// add one to this variable each time you defeat an opponent and then create a function with a conditional statement that activates game over when enemiesDefeated === 0
var gameOver = false;

var countdown = 11;

var intervalId;

var run = function () {
    countdown = 11;
    if (countdown === 0) {
        stop();

    } else {
        intervalId = setInterval(decrement, 1000);
    }
}

var decrement = function () {
    countdown--;
    $('#countdown').text(countdown);

    if (countdown === 0) {
        stop();
        $('#timer').addClass('d-none');
        alert('Your time is up')
    }
}

var stop = function () {
    clearInterval(intervalId)
}

// var healthQuestions = [1, 2, 3, 4];

// var currentQuestion = 0;

// var getQuestion = function () {
//     currentQuestion = healthQuestions[Math.floor(Math.random() * healthQuestions.length)]
//     if (currentQuestion === 1) {
//         $('#question-line').text('What is Chewbacca’s home planet?')
//         $('#answer-one').text('Bespin')
//         $('#answer-two').text('Kashyyyk').removeClass('user-answer').addClass('correct')
//         $('#answer-three').text('Endor')
//         $('#answer-four').text('Mustafar')
//         healthQuestions.splice(0, 1);
//     } else if (currentQuestion === 2) {
//         $('#question-line').text('Who is the only non-Jedi/Sith character to use a lightsaber in the original trilogy?')
//         $('#answer-one').text('Princess Leia')
//         $('#answer-two').text('Han Solo').removeClass('user-answer').addClass('correct')
//         $('#answer-three').text('Lando Calrissian')
//         $('#answer-four').text('Boba Fett')
//         healthQuestions.splice(1, 1);
//     } else if (currentQuestion === 3) {
//         $('#question-line').text('Where did Darth Vader reveal himself to be Luke’s father?')
//         $('#answer-one').text('Dagobah')
//         $('#answer-two').text('The Death Star')
//         $('#answer-three').text('Endor')
//         $('#answer-four').text('Cloud City').removeClass('user-answer').addClass('correct')
//         healthQuestions.splice(2, 1);
//     } else if (currentQuestion === 4) {
//         $('#question-line').text('What micro–organisms are said to be conductors of the force?')
//         $('#answer-one').text('Force ghosts')
//         $('#answer-two').text('Chlamydia')
//         $('#answer-three').text('Mitochondria')
//         $('#answer-four').text('Midichlorians').removeClass('user-answer').addClass('correct')
//         healthQuestions.splice(3, 1);
//     }

// }

// var displayQuestion = function () {
//     alert('Answer the Star Wars trivia question correctly to recieve a health pack before battling your next opponent.')
//     $('#question').removeClass('d-none')
// }


var displayHealthPacks = function () {
    opponentSelected = true;
    alert('Choose from a health pack below to boost HP before battling your next opponent')
    run();
    $('#timer').removeClass('d-none')

}



var gameReset = function () {
    user.resetCharacter();
    fighter.resetCharacter();
    opponentSelected = false;
    gameOver = true;
    fighter = "";
    user = "";
    enemiesDefeated = 0;
    $('#choose-side').empty();
    $('#choose-side').append('<h5>' + '- GAME OVER -' + '</h5>').addClass('text-center text-white')
    $('#narrative').empty();
    $('#narrative').append('<button>' + 'Play Again' + '</button>').find('button').addClass('btn btn-dark btn-large restart-game')
    $('#darth-maul, #boba-fett, #kylo-ren, #opp-darth-maul, #opp-boba-fett, #opp-kylo-ren, #opponent-villain, #qui-gon, #mace-windu, #han-solo, #opp-qui-gon, #opp-mace-windu, #opp-han-solo, #opponent-hero').addClass('d-none')


};


var playAgain = function () {

    if (gameOver) {
        $('#choose-side, #narrative').empty();
        $('#choose-side').append('<h5>' + 'Choose Your Side' + '</h5>');
        $('.side-buttons').removeClass('d-none');
        gameOver = false;
    }




}





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
        this.isFighting = true;
        this.currentOpponent = true;
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


        if (this.isFighting && this.initializeAttack && opponentSelected) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 mb-2 text center text-white').append('<div>' + `Your attack damaged ${fighter.name} ${this.currentDamage} points.` + '</div>')

        }
    },


    counter: function () {
        if (this.healthPoints <= 0) {
            this.resetCharacter()
            enemiesDefeated++;
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-darth-maul').addClass('d-none');
            $('#narrative').empty();



        } else if (opponentSelected) {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<p>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</p>')
        }

        if (enemiesDefeated === 3) {
            alert('Congratulations! You have successfully defeated all enemy opponents.')
            gameReset();

        } else if (this.isFighting === false && user.isUser) {
            displayHealthPacks();
        }
    },

    checkHealth: function () {
        if (user.healthPoints <= 0) {
            this.isUser = false;
            this.isFighting = false;
            this.initializeAttack = false;
            alert(`You have been defeated by ${fighter.name}`)
            gameReset();
        }


    },

    resetCharacter: function () {
        this.healthPoints = 150;
        this.currentDamage = 0;
        console.log(darthMaul)
    },







}

// Boba Fett Object 
var bobaFett = {
    name: 'Boba Fett',
    healthPoints: 180,
    currentDamage: 0,
    attackPower: [5, 7, 10, 12, 15, 17],
    rangedAttack: [9, 12, 14],
    rangedCounter: [6, 8, 10, 12, 14],
    counterAttack: [6, 9, 10, 12, 14, 15, ],
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
        this.isFighting = true;
        this.currentOpponent = true;
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


        if (this.isFighting && this.initializeAttack && opponentSelected) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 mb-2 text center text-white').append('<div>' + `Your attack damaged ${fighter.name} ${this.currentDamage} points.` + '</div>')

        }
    },


    counter: function () {
        if (this.healthPoints <= 0) {
            this.resetCharacter()
            enemiesDefeated++;
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-boba-fett').addClass('d-none');
            $('#narrative').empty();



        } else if (opponentSelected) {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<br>').append('<p>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</p>')
        }
        if (enemiesDefeated === 3) {
            alert('Congratulations! You have successfully defeated all enemy opponents.')
            gameReset();

        } else if (this.isFighting === false && user.isUser) {
            displayHealthPacks();
        }
    },

    checkHealth: function () {
        if (user.healthPoints <= 0) {
            this.isUser = false;
            this.isFighting = false;
            this.initializeAttack = false;
            alert(`You have been defeated by ${fighter.name}`)
            gameReset();
        }


    },

    resetCharacter: function () {
        this.healthPoints = 180;
        this.currentDamage = 0;
    }

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
        this.isFighting = true;
        this.currentOpponent = true;
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

        if (this.isFighting && this.initializeAttack && opponentSelected) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 text center').text(`Your attack damaged ${fighter.name} ${this.currentDamage} points.`)

        }
    },

    counter: function () {
        if (this.healthPoints <= 0) {
            this.resetCharacter()
            enemiesDefeated++;
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-mw').addClass('d-none');
            $('#narrative').empty();


        } else if (opponentSelected) {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<br>').append('<div>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</div>')
        }
        if (enemiesDefeated === 3) {
            alert('Congratulations! You have successfully defeated all enemy opponents.')
            gameReset();

        } else if (this.isFighting === false && user.isUser) {
            displayHealthPacks();
        }
    },

    checkHealth: function () {
        if (user.healthPoints <= 0) {
            this.isUser = false;
            this.isFighting = false;
            this.initializeAttack = false;
            alert(`You have been defeated by ${fighter.name}`)
            gameReset();
        }


    },

    resetCharacter: function () {
        this.healthPoints = 150;
        this.currentDamage = 0;
    }
}

// Kylo Ren Object 
var kyloRen = {
    name: 'Kylo Ren',
    healthPoints: 125,
    currentDamage: 0,
    attackPower: [10, 11, 13, 15, 18, 27],
    rangedAttack: [11, 13, 18],
    rangedCounter: [9, 12, 14, 10],
    counterAttack: [10, 12, 14, 15, 17, 20],
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
        this.isFighting = true;
        this.currentOpponent = true;
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


        if (this.isFighting && this.initializeAttack && opponentSelected) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 mb-2 text center text-white').append('<div>' + `Your attack damaged ${fighter.name} ${this.currentDamage} points.` + '</div>')

        }
    },


    counter: function () {
        if (this.healthPoints <= 0) {
            this.resetCharacter()
            enemiesDefeated++;
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-kylo-ren').addClass('d-none');
            $('#narrative').empty();



        } else if (opponentSelected) {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<br>').append('<p>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</p>')
        }

        if (enemiesDefeated === 3) {
            alert('Congratulations! You have successfully defeated all enemy opponents.')
            gameReset();

        } else if (this.isFighting === false && user.isUser) {
            displayHealthPacks();
        }
    },

    checkHealth: function () {
        if (user.healthPoints <= 0) {
            this.isUser = false;
            this.isFighting = false;
            this.initializeAttack = false;
            alert(`You have been defeated by ${fighter.name}`)
            gameReset();
        }


    },

    resetCharacter: function () {
        this.healthPoints = 125;
        this.currentDamage = 0;
    }

}

// Qui-Gon Jinn Object
var quiGon = {
    name: 'Qui-Gon Jinn',
    healthPoints: 125,
    currentDamage: 0,
    attackPower: [10, 11, 13, 15, 18, 27],
    rangedAttack: [11, 13, 18],
    rangedCounter: [9, 12, 14, 10],
    counterAttack: [10, 12, 14, 15, 17, 20],
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
        this.isFighting = true;
        this.currentOpponent = true;
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


        if (this.isFighting && this.initializeAttack && opponentSelected) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 mb-2 text center text-white').append('<div>' + `Your attack damaged ${fighter.name} ${this.currentDamage} points.` + '</div>')

        }
    },


    counter: function () {
        if (this.healthPoints <= 0) {
            this.resetCharacter()
            enemiesDefeated++;
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-qui-gon').addClass('d-none');
            $('#narrative').empty();



        } else if (opponentSelected) {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<br>').append('<p>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</p>')
        }

        if (enemiesDefeated === 3) {
            alert('Congratulations! You have successfully defeated all enemy opponents.')
            gameReset();

        } else if (this.isFighting === false && user.isUser) {
            displayHealthPacks();
        }
    },

    checkHealth: function () {
        if (user.healthPoints <= 0) {
            this.isUser = false;
            this.isFighting = false;
            this.initializeAttack = false;
            alert(`You have been defeated by ${fighter.name}`)
            gameReset();
        }


    },

    resetCharacter: function () {
        this.healthPoints = 125;
        this.currentDamage = 0;
    }

}

// Han Solo Object 
var hanSolo = {
    name: 'Han Solo',
    healthPoints: 180,
    currentDamage: 0,
    attackPower: [5, 7, 10, 12, 15, 17],
    rangedAttack: [9, 12, 14],
    rangedCounter: [6, 8, 10, 12, 14],
    counterAttack: [6, 9, 10, 12, 14, 15, ],
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
        this.isFighting = true;
        this.currentOpponent = true;
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


        if (this.isFighting && this.initializeAttack && opponentSelected) {
            fighter.healthPoints -= this.currentDamage;
            $('#narrative').empty()
            $('#narrative').addClass('mt-5 mb-2 text center text-white').append('<div>' + `Your attack damaged ${fighter.name} ${this.currentDamage} points.` + '</div>')

        }
    },


    counter: function () {
        if (this.healthPoints <= 0) {
            this.resetCharacter()
            enemiesDefeated++;
            alert(`You have defeated ${this.name}`)
            this.isFighting = false;
            opponentSelected = false;
            $('#opp-han-solo').addClass('d-none');
            $('#narrative').empty();


        } else if (opponentSelected) {
            user.healthPoints -= this.currentDamage;

            $('#narrative').append('<br>').append('<p>' + `${fighter.name} damaged you ${this.currentDamage} points with his counter attack.` + '</p>')
        }

        if (enemiesDefeated === 3) {
            alert('Congratulations! You have successfully defeated all enemy opponents.')
            gameReset();

        } else if (this.isFighting === false && user.isUser) {
            displayHealthPacks();
        }

    },

    checkHealth: function () {
        if (user.healthPoints <= 0) {
            this.isUser = false;
            this.isFighting = false;
            this.initializeAttack = false;
            alert(`You have been defeated by ${fighter.name}`)
            gameReset();
        }


    },

    resetCharacter: function () {
        this.currentDamage = 0;
        this.healthPoints = 180;
    }

}

var displayVillains = function () {
    $('#opponent-villain, #choose-maul, #choose-ren, #choose-fett').removeClass('d-none');

}

var displayHeros = function () {
    $('#opponent-hero, #choose-jinn, #choose-windu, #choose-solo').removeClass('d-none');
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
        $('#narrative').addClass('text-white text-center mt-2').text('Opponents with a lower HP will have a slightly higher counter attack than opponents with greater HP.')
    })

    $('#select-ren').on('click', function () {
        kyloRen.selectCharacter();
        displayHeros();
        user = kyloRen;
        user.displayStats();
        $('#narrative').addClass('text-white text-center mt-2').text('Opponents with a lower HP will have a slightly higher counter attack than opponents with greater HP.')

    })

    $('#select-fett').on('click', function () {
        bobaFett.selectCharacter();
        displayHeros();
        user = bobaFett;
        user.displayStats();
        $('#narrative').addClass('text-white text-center mt-2').text('Opponents with a lower HP will have a slightly higher counter attack than opponents with greater HP.')

    })

    $('#select-windu').on('click', function () {
        maceWindu.selectCharacter();
        displayVillains();
        user = maceWindu;
        user.displayStats();
        $('#narrative').addClass('text-white text-center mt-2').text('Opponents with a lower HP will have a slightly higher counter attack than opponents with greater HP.')

    })

    $('#select-solo').on('click', function () {
        hanSolo.selectCharacter();
        displayVillains();
        user = hanSolo;
        user.displayStats();
        $('#narrative').addClass('text-white text-center mt-2').text('Opponents with a lower HP will have a slightly higher counter attack than opponents with greater HP.')

    })

    $('#select-jinn').on('click', function () {
        quiGon.selectCharacter();
        displayVillains();
        user = quiGon;
        user.displayStats();
        console.log(user)
        $('#narrative').addClass('text-white text-center mt-2').text('Opponents with a lower HP will have a slightly higher counter attack than opponents with greater HP.')

    })


    $('#choose-maul').on('click', function () {
        event.preventDefault();
        if (opponentSelected === false) {
            $('#choose-side').empty();
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).addClass('d-none');
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
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).addClass('d-none');
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
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).addClass('d-none');
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
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).addClass('d-none');
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
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).addClass('d-none');
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
            $('#narrative').empty();
            var verse = $('<h5>').addClass('text-white text-center display-4 mt-5').text('VS')
            $('#narrative').append(verse);
            opponentSelected = true;
            $(this).addClass('d-none');
            quiGon.selectedOpp()
            fighter = quiGon;
        } else {
            alert('You must defeat your current opponent before selecting a new one.')
        }

        if (opponentSelected) {

            fighter.displayStats();

        }
    });


    $('.attack').on('click', function () {
        // user.checkHealth();
        user.attackMulti();
        fighter.attackMulti();

        user.attack();
        fighter.counter();

        fighter.displayStats()
        user.displayStats()
        user.checkHealth();
    })

    $('.ranged').on('click', function () {
        // user.checkHealth();
        user.rangedMulti();
        fighter.rangedMulti();
        user.attack();
        fighter.counter();
        fighter.displayStats();
        user.displayStats();
        user.checkHealth();
    })

    $('.health-pack').on('click', function () {
        var addedHealth = parseInt($(this).val());
        stop();
        user.healthPoints += addedHealth;
        user.displayStats();
        $('#timer').addClass('d-none')
        opponentSelected = false;
        var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
        $('#choose-side').append(verse);
        $('#narrative').addClass('mt-5 mb-2 text center text-white').append('<div>' + `You recieved ${addedHealth} health points.` + '</div>')
    })


    // $('.correct').on('click', function () {
    //     event.preventDefault();
    //     alert('Congratulations! Retrieve your health pack below.')
    // })

    // $('.user-answer').on('click', function () {
    //     event.preventDefault();
    //     alert('That answer is incorrect')
    //     // $('#question').addClass('d-none');
    //     // $('#narrative').empty();
    //     // var verse = $('<h5>').addClass('text-white mt-2').text('Select Your Opponent');
    //     // $('#choose-side').append(verse);
    // })


    $('#narrative').on('click', function () {
        event.preventDefault();
        playAgain();
    })

















});