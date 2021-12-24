// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


//Promise
//
// function wakeUp(wakeUp) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (wakeUp) {
//                 resolve('Доброго ранку, час прокидатись');
//             } else {
//                 reject('Ще 5 хвилин. Ой, знов проспав')
//             }
//         }, 500)
//     })
// }
//
// function haveEat(vivsianka) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (vivsianka) {
//                 resolve(`Смачного)`);
//             } else {
//                 reject('Знову не встигнула поснідати(');
//             }
//         }, 1000)
//     })
// }
//
// function takeShower(headShoulders) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (headShoulders) {
//                 resolve('Душ бадьорить');
//             } else {
//                 reject('Без душу відчуття не ті...');
//             }
//         }, 2000)
//     })
// }
//
// function goBus(bus) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bus) {
//                 resolve('Ідемо на автобусну зупинку');
//             } else {
//                 reject('Запізнився, треба викликати таксі)');
//             }
//         }, 2000)
//
//     })
// }
//
// function workMorning(work) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (work) {
//                 resolve('Попрацювати на свіжу голову добре)');
//             } else {
//                 reject('Після екстремального ранку робота не клеїться(');
//             }
//         }, 2000)
//     })
// }
//
// function haveLunch(butterBrod) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (butterBrod) {
//                 resolve('Після плідної роботи час смачно перекусити');
//             } else {
//                 reject('Коли запара на роботі не час думати про їжу, та і мозок працює краще на голодний шлунок....Напевно...');
//             }
//         }, 2000)
//     })
// }
//
// function workAfternoon(work) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (work) {
//                 resolve('Працюємо продуктивно, після смачного обіду');
//             } else {
//                 reject('Робота не клеїться і в шлунку бурчить(');
//             }
//         }, 2000)
//     })
// }
//
// function goHome(bus) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bus) {
//                 resolve('Можна вчасно іти додому після продуктивного дня');
//             } else {
//                 reject('Можна вчасно іти додому...А ні, треба доробити все, що не встигнув під час робочого дня))))')
//             }
//         }, 2000)
//     })
// }
//
// function haveDinner(plov) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (plov) {
//                 resolve('Смачної вечері')
//             } else {
//                 reject('Яка вечеря, ти ж на роботі')
//             }
//         }, 1500)
//     })
// }
//
// function watchLesson(js) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (js) {
//                 resolve('Вивчаємо нову тему');
//             } else {
//                 reject('Сподіваюсь, що після роботи і без вечері ти зрозуміла свої помилки і вивчатимеш JS')
//             }
//         }, 1500)
//     })
// }
//
// wakeUp(true).then(wakeUp => {
//     console.log(wakeUp);
//     return haveEat('Вівсяночка');
// }).then(haveEat => {
//     console.log(haveEat);
//     return takeShower(true);
// }).then(takeShower=>{
//     console.log(takeShower);
//     return goBus(true);
// }).then(goBus=>{
//     console.log(goBus);
//     return workMorning(true);
// }).then(workMorning=>{
//     console.log(workMorning);
//     return haveLunch('Бутерброд)');
// }).then(haveLunch =>{
//     console.log(haveLunch);
//     return workAfternoon(true);
// }).then(workAfternoon=>{
//     console.log(workAfternoon);
//     return goHome(true);
// }).then(goHome =>{
//     console.log(goHome);
//     return haveDinner('Плов');
// }).then(haveDinner=>{
//     console.log(haveDinner);
//     return watchLesson(true)
// }).then(watchLesson=>{
//     console.log(watchLesson);
// }).catch(reason => {
//     console.error(reason);
// })
//

//Callback


//     function wakeUp(wakeUp,callback) {
//         setTimeout(() => {
//             if (wakeUp){
//                 console.log('Доброго ранку, час прокидатись');
//                 callback()
//             }else {
//                 callback('Ще 5 хвилин. Ой, знов проспав');
//             }
//         }, 500)
//     }
// function haveEat(vivsianka,callback) {
//     setTimeout(() => {
//         if (vivsianka){
//             console.log('Смачного');
//             callback()
//         }else {
//             callback('Знову не встигнула поснідати(');
//         }
//     }, 1000)
// }
// function takeShower(headShoulders,callback) {
//     setTimeout(() => {
//         if (headShoulders){
//             console.log('Душ бадьорить');
//             callback()
//         }else {
//             callback('Без душу відчуття не ті...');
//         }
//     }, 2000)
// }
// function goBus(bus,callback) {
//     setTimeout(() => {
//         if (bus){
//             console.log('Ідемо на автобусну зупинку');
//             callback()
//         }else {
//             callback('Запізнився, треба викликати таксі');
//         }
//     }, 2000)
// }
// function workMorning(work,callback) {
//     setTimeout(() => {
//         if (work){
//             console.log('Попрацювати на свіжу голову добре');
//             callback();
//         }else {
//             callback('Після екстремального ранку робота не клеїться(');
//         }
//     }, 2000)
// }
// function haveLunch(butterBrod,callback) {
//     setTimeout(() => {
//         if (butterBrod){
//             console.log('Після плідної роботи час смачно перекусити');
//             callback();
//         }else {
//             callback('Коли запара на роботі не час думати про їжу, та і мозок працює краще на голодний шлунок....Напевно...');
//         }
//     }, 2000)
// }
// function workAfternoon(work,callback) {
//     setTimeout(() => {
//         if (work){
//             console.log('Працюємо продуктивно, після смачного обіду');
//             callback();
//         }else {
//             callback('Робота не клеїться і в шлунку бурчить(');
//         }
//     }, 2000)
// }
// function goHome(bus,callback) {
//     setTimeout(() => {
//         if (bus){
//             console.log('Можна вчасно іти додому після продуктивного дня');
//             callback()
//         }else{
//             callback('Можна вчасно іти додому...А ні, треба доробити все, що не встигнув під час робочого дня))))');
//         }
//     }, 2000)
// }
// function haveDinner(plov,callback) {
//     setTimeout(() => {
//         if (plov){
//             console.log('Смачної вечері');
//             callback();
//         }else {
//             callback('Яка вечеря, ти ж на роботі');
//         }
//     }, 1500)
// }
// function watchLesson(js,callback) {
//     setTimeout(() => {
//         if (js){
//             console.log('Вивчаємо нову тему');
//             callback();
//         }else {
//             callback('Сподіваюсь, що після роботи і без вечері ти зрозуміла свої помилки і вивчатимеш JS');
//         }
//     }, 1500)
// }
//
// wakeUp(true,(e)=>{
//     if (e){
//         console.error(e);
//     }else {
//         haveEat(true,(e)=>{
//             if (e){
//                 console.error(e);
//             }else {
//                 takeShower(true,(e)=>{
//                     if (e){
//                         console.error(e);
//                     }else {
//                         goBus(true,(e)=>{
//                             if (e){
//                                 console.error(e);
//                             }else {
//                                 workMorning(true,(e)=>{
//                                     if (e){
//                                         console.error(e);
//                                     }else {
//                                         haveLunch(true,(e)=>{
//                                             if (e){
//                                                 console.error(e);
//                                             }else {
//                                                 workAfternoon(true,(e)=>{
//                                                     if (e){
//                                                         console.error(e);
//                                                     }else {
//                                                         goHome(true,(e)=>{
//                                                             if (e){
//                                                                 console.error(e);
//                                                             }else {
//                                                                 haveDinner(true,(e)=>{
//                                                                     if (e){
//                                                                         console.error(e);
//                                                                     }else {
//                                                                         watchLesson(true,(e)=>{
//                                                                             if (e) {
//                                                                                 console.error(e);
//                                                                             }
//                                                                         })
//                                                                     }
//                                                                 })
//                                                             }
//                                                         })
//                                                     }
//                                                 })
//                                             }
//                                         })
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// });


//Async await

function wakeUp(dontSleep) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dontSleep) {
                resolve('Доброго ранку, час прокидатись');
            } else {
                reject('Ще 5 хвилин. Ой, знов проспав');
            }
        }, 500);
    });
}

function haveEat(vivsianka) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (vivsianka) {
                resolve(`Смачного)`);
            } else {
                reject('Знову не встигнула поснідати(');
            }
        }, 1000);
    });
}

function takeShower(headShoulders) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (headShoulders) {
                resolve('Душ бадьорить');
            } else {
                reject('Без душу відчуття не ті...');
            }
        }, 2000)
    });
}

function goBus(bus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bus) {
                resolve('Ідемо на автобусну зупинку');
            } else {
                reject('Запізнився, треба викликати таксі)');
            }
        }, 2000)

    })
}

function workMorning(work) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (work) {
                resolve('Попрацювати на свіжу голову добре)');
            } else {
                reject('Після екстремального ранку робота не клеїться(');
            }
        }, 2000)
    })
}

function haveLunch(butterBrod) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (butterBrod) {
                resolve('Після плідної роботи час смачно перекусити');
            } else {
                reject('Коли запара на роботі не час думати про їжу, та і мозок працює краще на голодний шлунок....Напевно...');
            }
        }, 2000)
    })
}

function workAfternoon(work) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (work) {
                resolve('Працюємо продуктивно, після смачного обіду');
            } else {
                reject('Робота не клеїться і в шлунку бурчить(');
            }
        }, 2000)
    })
}

function goHome(bus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bus) {
                resolve('Можна вчасно іти додому після продуктивного дня');
            } else {
                reject('Можна вчасно іти додому...А ні, треба доробити все, що не встигнув під час робочого дня))))')
            }
        }, 2000)
    })
}

function haveDinner(plov) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (plov) {
                resolve('Смачної вечері')
            } else {
                reject('Яка вечеря, ти ж на роботі')
            }
        }, 1500)
    })
}

function watchLesson(js) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (js) {
                resolve('Вивчаємо нову тему');
            } else {
                reject('Сподіваюсь, що після роботи і без вечері ти зрозуміла свої помилки і вивчатимеш JS')
            }
        }, 1500)
    })
}

async function myEveryDay() {
    try {
        const wake = await wakeUp(true);
        const breakfest = await haveEat(true);
        const shower = await takeShower(true);
        const road = await goBus(true);
        const workMor = await workMorning(true);
        const lunch = await haveLunch(true);
        const workAfter = await workAfternoon(true);
        const roadHome = await goHome(true);
        const dinner = await haveDinner(true);
        const lesson = await watchLesson(true);

        console.log(wake);
        console.log(breakfest);
        console.log(shower);
        console.log(road);
        console.log(workMor);
        console.log(lunch);
        console.log(workAfter);
        console.log(roadHome);
        console.log(dinner);
        console.log(lesson);
    } catch (e) {
        console.error(e);
    }
}

myEveryDay();