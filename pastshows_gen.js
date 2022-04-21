import fs from 'fs'
const args=process.argv.slice(2);
args.forEach((val)=>{
    console.log(`pastshows/${val}`);
    if (fs.existsSync(`pastshows/${val}`)) {
        console.log('Directory exists!');
    } else {
        fs.mkdirSync(`pastshows/${val}`);
    }
});