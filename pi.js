//stoper i nightmode

let pi = ' 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'
document.querySelector('#writer').addEventListener('input', (e) => {
    let input = e.target.value
    let piSub = pi.toString().substring(1, input.length + 1)
    let isEqual = console.log(input === piSub)

    if (input !== piSub) {
        window.alert(`You failed! You got ${input.length - 2} digits right. Try again`)
        location.reload()
    } else if (input === '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679') {
        window.alert('Congrats! You got 100 digits right without any mistake!!')
    }

})



// let story = ' TR TL BN SHL ML VB RB MN MF RJ NJ RM MF MN CP LS NV VR TP CT JP MP PM CL TS LV NS BR RP RR LB NM SR FT JR ZJ NV JN SF BB FCH NV SM RF NL MR ND TR SJ CP'
// document.querySelector('#story').addEventListener('input', (e) => {
//     let input = e.target.value
//     let sSub = story.toString().substring(1, input.length + 1)
//     let isEqual = console.log(input === sSub)

//     if (input.toUpperCase() !== sSub) {
//         window.alert(`You failed! Try again`)
//         location.reload()
//     } else if (input.toUpperCase() === 'TR TL BN SHL ML VB RB MN MF RJ NJ RM MF MN CP LS NV VR TP CT JP MP PM CL TS LV NS BR RP RR LB NM SR FT JR ZJ NV JN SF BB FCH NV SM RF NL MR ND TR SJ CP') {
//         window.alert('Congrats! You got it all done without any mistake!!')
//     }
// })



document.querySelector('#button').addEventListener('click', (e) => {
    window.alert('0-S,Z | 1-T,D | 2-N | 3-M | 4-R | 5-L | 6-J,SH,CH | 7=C,R | 8=V,F | 9=P,B')
})

document.querySelector('#button1').addEventListener('click', (e) => {
    window.alert('TR TL BN SHL ML VB RB MN MF RJ NJ RM MF MN CP LS NV VR TP CT JP MP PM CL TS LV NS BR RP RR LB NM SR FT JR ZJ NV JN SF BB FCH NV SM RF NL MR ND TR SJ CP')
})


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




document.querySelector('#game').addEventListener
