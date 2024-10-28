console.log('hello node js');

console.log(process.env.PIN);

console.log(process.argv.slice(2));




const adminInput = process.env.PIN

if (adminInput === 'admin') {
    console.log('Welcome Admin');
    
} else{
    console.log('Access Restricted');
    
}