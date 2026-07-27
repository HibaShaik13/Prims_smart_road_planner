let roads = [];

function addRoad() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let cost = parseInt(document.getElementById("cost").value);

    roads.push({ from, to, cost });

    let li = document.createElement("li");
    li.textContent = `${from} - ${to} : ${cost}`;
    document.getElementById("roadList").appendChild(li);
}

function generateMST() {
    let start = document.getElementById("startVillage").value;
    let visited = new Set();
    visited.add(start);

    let mst = [];
    let totalCost = 0;

    while (visited.size < getAllVillages().size) {

        let minEdge = null;

        for (let road of roads) {
            if (
                (visited.has(road.from) && !visited.has(road.to)) ||
                (visited.has(road.to) && !visited.has(road.from))
            ) {
                if (!minEdge || road.cost < minEdge.cost) {
                    minEdge = road;
                }
            }
        }

        if (!minEdge) break;

        mst.push(minEdge);
        totalCost += minEdge.cost;

        visited.add(minEdge.from);
        visited.add(minEdge.to);
    }

    displayResult(mst, totalCost);
}

function getAllVillages() {
    let villages = new Set();
    roads.forEach(road => {
        villages.add(road.from);
        villages.add(road.to);
    });
    return villages;
}

function displayResult(mst, totalCost) {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h4>MST Edges:</h4>";

    mst.forEach(edge => {
        resultDiv.innerHTML += `${edge.from} - ${edge.to} : ${edge.cost} <br>`;
    });

    resultDiv.innerHTML += `<h3>Total Cost: ${totalCost}</h3>`;
}
