//minimum

let age = prompt('How old are you?');

console.log(age);

switch (true) {    
    case (age >= 0 && age <= 11):
        console.log('baby');
        break;
    case (age >= 12 && age <= 17):
        console.log('teen');
        break;
    case (age >= 18 && age <= 59):
        console.log('adult');
        break;
    case (age >= 60 && age <= 100):
        console.log('retired');
        break;
    default:
        console.log(Error);
}

// let num = prompt('Enter number 0-9');

switch (num) {
    case '1':
        console.log('!');
        break;
    case '2':
        console.log('@');
        break;
    case '3':
        console.log('#');
        break;
    case '4':
        console.log('$');
        break;
    case '5':
        console.log('%');
        break;
    case '6':
        console.log('^');
        break;
    case '7':
        console.log('&');
        break;
    case '8':
        console.log('*');
        break;
    case '9':
        console.log('(');
        break;
    case '0':
        console.log(')');
        break;
    default:
        console.log(Error);
}

