console.log('hello node js');

console.log(process.env.PIN);

console.log(process.argv.slice(2));

const adminInput = process.argv[2]


const AdminNumber = process.env.PIN

if (adminInput == 'admin' && AdminNumber == 666 ) {
    console.log('Welcome Admin');
    
} else{
    console.log('Access Restricted');
    
}