const drawtable = () => {
    let c=math.floor(math.random() * (3-1) + 1);
    let r=math.floor(math.random() * (3-1) + 1);
    console.log(c, r)

    const table = document.getElementById("table").children[0];
    console.log(table);
    const cells = table.children;
    const cell = cells[c-1].children[r-1]
    cell.children[0].setAttribute('src', `/img/img${math.floor(math.random() * (5-1) + 1)}.png`);
}
setInterval(drawtable, 1000);

// PIRVELI DAVALEBA