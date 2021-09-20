const review = [
	{
		name : "Rohan Row",
		job : "UI | UX Design",
		img : "img/img2.jpg",
		info : "Lorem ipsum, dolor, sit amet consectetur adipisicing elit Ipsum fuga accusamus nam quibusdam repudiandae. Quam nostrum ex minus necessitatibus explicabo."
	},
	{
		name : "Rahi Kahn",
		job : "Web Developer",
		img : "img/img3.jpg",
		info : "Laccusamus nam orem ipsum, dolor, sit amet consectetur adipisicing elit Ipsum fuga  explicabo."
	},
	{
		name : "Fozle Rabbi",
		job : "Full-Stack Dev.",
		img : "img/img4.jpg",
		info : "consectetur adipisicing elit Ipsum fuga alicabo.ccusamus namnecp  cabo.ccusamus cabo.ccusamus "
	},
	{
		name : "Hasinu Karim",
		job : "Frontend Dev.",
		img : "img/img1.jpg",
		info : "sit amet consectetur adipisicing elit Ipsum fuga accusamu elit Ipsum fuga accusamus nam quibusdam repudiandae. Quam nostrum ex minus necessitatibus explicabo."
	}
]

// selet item
let name = document.querySelector('.name');
let job = document.querySelector('.job');
let setImg = document.querySelector('#img');
let info = document.querySelector('.info');
let surpise = document.querySelector('.surpise-btn');
// next prv select 
let nextBtn = document.querySelector('.l-slide');
let prevBtn = document.querySelector('.r-slide');

let currentNumber = 0;

window.addEventListener('DOMContentLoaded' , showPerson(currentNumber))

function showPerson(person){
	let item = review[person];
	setImg.src = item.img;
	name.innerText = item.name;
	info.innerText = item.info;
	job.innerText = item.job;
}

nextBtn.addEventListener('click' , () => {
	if(currentNumber > review.length - 1){
		currentNumber = 0;
	}
	currentNumber++;
	showPerson(currentNumber);
})

prevBtn.addEventListener('click' , () => {
	currentNumber--;
	showPerson(currentNumber);
})

surpise.addEventListener('click' , () => {
	alert('thanks!')
})