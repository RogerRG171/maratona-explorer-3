/* background circles */

const ulCircle = document.querySelector("ul.circle");
const vetor = ['blue','red','green','orange','purple','white', 'pink', 'grey', 'heavy metal'];

for(let i =0; i < 11; i++){
    const li = document.createElement("li");
    li.id = i;
    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 100));
    const position = random(1,30);
    const delay = random(5, 0.1);
    const duration = random(24 , 12);
    let cor1 = random(0,vetor.length);
    let cor2 = random(0,vetor.length);
    cor1 = Math.floor(cor1);
    cor2 = Math.floor(cor2);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    //li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;
    
    li.innerText = `Maykão`;
    li.style.backgroundImage = `linear-gradient(to bottom right, ${vetor[cor1]}, ${vetor[cor2]})`

    

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;

    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ulCircle.appendChild(li);
}