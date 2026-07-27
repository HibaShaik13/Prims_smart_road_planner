const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/*
  Prim's Algorithm with Step Tracking
*/
function primMST(roads, start) {

  // Build adjacency list
  const adj = {};
  roads.forEach(({ from, to, cost }) => {
    if (!adj[from]) adj[from] = [];
    if (!adj[to]) adj[to] = [];

    adj[from].push({ node: to, cost });
    adj[to].push({ node: from, cost });
  });

  const visited = new Set([start]);
  const mst = [];
  const steps = [];
  let totalCost = 0;

  while (visited.size < Object.keys(adj).length) {

    let minEdge = null;
    let candidates = [];

    // Check all edges from visited nodes
    for (let node of visited) {
      for (let neighbor of adj[node]) {
        if (!visited.has(neighbor.node)) {

          const edge = {
            from: node,
            to: neighbor.node,
            cost: neighbor.cost
          };

          candidates.push(edge);

          if (!minEdge || neighbor.cost < minEdge.cost) {
            minEdge = edge;
          }
        }
      }
    }

    // If graph is disconnected
    if (!minEdge) break;

    // Add smallest edge to MST
    visited.add(minEdge.to);
    mst.push(minEdge);
    totalCost += minEdge.cost;

    // Save step details
    steps.push({
      visited: Array.from(visited),
      candidates,
      chosen: minEdge
    });
  }

  return { mst, totalCost, steps };
}


/*
  API Route
*/
app.post("/mst", (req, res) => {
  const { roads, start } = req.body;

  if (!roads || !start) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const result = primMST(roads, start);
  res.json(result);
});


/*
  Start Server
*/
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});