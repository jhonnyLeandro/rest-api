import app from './app';

(function main (){
    app.listen(process.env.PORT, () => {
        console.log(`Server initialized, listening port ${ process.env.PORT }`);
    });
})()