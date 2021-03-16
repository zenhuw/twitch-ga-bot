// put command definition here

export const processMessage = (msg: string): string | null => {

    switch (msg.trim()) {
        case '!ga':
            return gaCommand()

        case '!ga game':
            return gaGame()

        case '!ga time':
            return gaTime()

        // case '!ga join':
        //     return gaJoin()

        case '!ga participant':
            return gaPart()

        case '!ga rollgame':
            return gaRollGim()

        case '!ga rollwinner':
            return gaRollWin()
        
        default:
            return null
    }

}


const gaCommand = (): string => {
    return `To take a part in the giveaway, type "!ga join" in the chat. Use "!ga command" to check the other command`
}

const gaGame = (): string => {
    return `List of the game : 1. Little Nightmare, 1. Little Nightmare 2`
}

const gaTime = (): string => {
    var today = new Date();
    var date = today.getDate()+'-'+today.getMonth()+'-'+today.getFullYear();
    var time = today.getHours()+':'+today.getMinutes();
    return `The giveaway will be rolled at `+date +' '+time+' WIB'
}

// const gaJoin = (): string => {
//     var member = [];
//     return ''
// }

const gaPart = (): string => {
    var member = [];
    return 'List giveaway participant : ' + member
}

function gaRollGim () {
    var game = []
    const sides = game.length
    const choosen = Math.floor(Math.random() * sides) + 1;
    return 'The choosen game is '+ game[choosen]
}

function gaRollWin () {
    var member = []
    const sides = member.length
    const choosen = Math.floor(Math.random() * sides) + 1;
    return 'The choosen winner is '+ member[choosen]
  }

  
/*
NB : Tinggal Global variabel buat member sama game harusnya
*/
