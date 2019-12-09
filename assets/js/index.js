'use strict';


/*


const  promise =  new Promise(
    function (resolve, reject) {
            setTimeout(function () {


                if (Math.random() >0.5) {


                    reject(new Error("error"));
                }

                resolve('success!')
            }, 1000)
    }
);






asyncFunction()

async function asyncFunction() {


    try {
        console.log(await promise);
    }catch (e) {

        console.error(e)

    }



}


promise
    .then(console.log)
    .catch(console.error);
*/


/*
const promise1 = Promise.resolve(55);



async function logData() {


    try {
        const  promiseValue = await promise1;
        console.log(promiseValue);
    }
     catch (e) {

         console.error(e)
     }




}*/

/*

function randomResolve(resolve , reject) {


    setTimeout(function () {
        if (Math.random() > 0.2){
            resolve("HEllo")
        }
        reject(new Error("error"));


    },2000)

}


test();


const  promise = [
    new Promise(randomResolve),
    new Promise(randomResolve),
    new Promise(randomResolve),
    new Promise(randomResolve),
    new Promise(randomResolve),
];


async function test() {


    try {
        const result = await  Promise.all(promise);

        console.log(result);
    }catch (e) {

        console.error(e);

    }

}*/


fetch('../items.json')
    .then(response => {
        return response.json()
    })
    .then(console.log)
    .catch(console.error);