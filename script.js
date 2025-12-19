function openCard() {
	let cover = document.getElementById('cover');
	cover.className = 'open-card';
}

function closeCard() {
	let cover = document.getElementById('cover');
	cover.className = '';
}

const number_of_snowflakes = 300;
const max_snowflake_size = 5;
const max_snowflake_speed = 2;
const snowflake_colour = 'white';

const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.style.zIndex = 2;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const createSnowflake = () => ({
	x: Math.random() * canvas.width,
	y: Math.random() * canvas.height,
	radius: Math.floor(Math.random() * max_snowflake_size) + 1,
	color: snowflake_colour,
	speed: Math.random() * max_snowflake_speed + 1,
	sway: Math.random() - 0.5
});

const drawSnowflake = snowflake => {
	ctx.beginPath();
	ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
	ctx.fillStyle = snowflake.color;
	ctx.fill();
	ctx.closePath();
};


const updateSnowFlake = snowflake => {
	snowflake.y += snowflake.speed;
	snowflake.x += snowflake.sway;
	if (snowflake.y > canvas.height) {
		Object.assign(snowflake, createSnowflake());
	}
};	

const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);


	snowflakes.forEach(snowflake => {
		updateSnowFlake(snowflake);
		drawSnowflake(snowflake);
	});

	requestAnimationFrame(animate);
};

for (let i = 0; i < number_of_snowflakes; i++) {
	snowflakes.push(createSnowflake());
}



animate()






