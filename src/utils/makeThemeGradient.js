export default function makeThemeGradient(theme) {

    let colors = [theme.bg, theme.stroke];

    theme.colors.forEach(c => {
        colors.push(c)
    });

    theme.words.forEach(c => {
        colors.push(c)
    });

    let gradientString = '';

    colors = [...new Set(colors)];

    let percentage = parseInt((100 / colors.length).toFixed(0))
    let currentPercent = percentage;

    colors.forEach((c, i) => {
        if(i == 0){
            gradientString += `${c}, ${c} ${currentPercent}%, `;
        } 
        else if (i == colors.length - 1){
            gradientString += `${c} ${currentPercent}%, ${c} 100%`;
        }
        else {
            gradientString += `${c} ${currentPercent}%, ${c} ${currentPercent + percentage}%, `;
            currentPercent += percentage;
        }
    })

    return `linear-gradient(to right, ${gradientString})`;
}