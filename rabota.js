let truelogin = "login";
let truepassword = "password";
let login = prompt("Введите свой логин");
if (login != truelogin) {
    alert("Вы ввели неправильный логин")
} else if (login == truelogin) {
    let password = prompt("Введите свой пароль");
if (password == truepassword) {
    alert("Добро пожаловать");
} else {
    alert("Неправильный пароль");
    }
}

let servers = {
    server1:{
        name:'Stockholm', 
        location: 'North Europe',
        ping: 23
    },
    server2:{
        name:'Liechtenstein',
        location:'Central Europe',
        ping: 36
    },
    server3:{
        name:'Kyiv',
        location:'Eastern Europe',
        ping: 7
    }
}
function askServers() {
    let server = prompt('Выберете сервер:\nKyiv\nStockholm\nLiechtenstein');
    if(server == 'Stockholm'){
        alert("location: 'North Europe'\nping: 23")
    } else if(server == 'Liechtenstein'){
        alert("location: 'Central Europe'\nping: 36")
    } else if(server == 'Kyiv'){
        alert("location: 'Eastern Europe'\nping: 7")
    } else {
        alert('Не верно введено имя сервера')
        return askServers()
    }
    let confirmServer = confirm("Подтвердите выбор")
    if(!confirmServer){
        askServers()
    }
}
askServers()



let characters = {
    character1:{
        name:'Butcher',
        skill:'Dismember',
        characteristic:'tall, heavy, scary, powerfull'
    },
        character2:{
        name:'Assassin',
        skill:'Crete',
        characteristic:'secretive, cunning, silent,'
    },
        character3:{
        name:'Spirit',
        skill:'Astral stap',
        characteristic:'wise, mysterious, experienced'
    },
        character4:{
        name:'Flame',
        skill:'Sunray',
        characteristic:'cute, kind, fast'
    },
        character5:{
            name:'Monkey King',
            skill: 'Boundless strike',
            characteristic:'arrogant, boastful, legendary' 
        }
}
function askCharacter() {
    let character = prompt ('Доступные персонажи:\n Butcher\n Assassin\n Spirit\n Flame\n Monkey King\n');
    if (character == 'Butcher'){
      alert('\n skill:"Dismember", \n characteristic:"tall, heavy, scary, powerfull"')
    } else if (character == 'Assasin'){
      alert('\n skill:"Crete", \n characteristic:"secretive, cunning, silent"')
    } else if (character == 'Spirit'){
      alert('\n skill:"Astral stap", \n characteristic:"wise, mysterious, experienced"')
    } else if (character == 'Flame'){
      alert('\n skill:"Sunray", \n characteristic:"cute, kind, fast"')
    } else if (character == 'Monkey King'){
      alert('\n skill:"Boundless strike", \n characteristic:"arrogant, boastful, legendary"')
    } else{
      alert('Не верно введено имя пресонажа')
      return askCharacter()
    }

    let confirmChoice = confirm('Подтвердите выбор')
    if (!confirmChoice){
        askCharacter()
    } else {
        alert("Вход выполнен, удачи и прятной игры")
    }
}
askCharacter()
