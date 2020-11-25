const girl = 'paulth'
let grrl = girl

let u = 0
const boy = 'esther'
let biy = boy

let u = 0

const check = () => {
	for (let a = 0; a < girl.length; a ++) {

		let i = 0
		while (i < biy.length) {

			if (girl[a] === biy[i]) {
				grrl = grrl.slice(0, a - u).concat(grrl.slice(a - u + 1))
				biy = biy.slice(0, i).concat(biy.slice(i + 1))

				u++
				break
			}

			i++
		}
	}

	console.log(biy, grrl)
}


check()