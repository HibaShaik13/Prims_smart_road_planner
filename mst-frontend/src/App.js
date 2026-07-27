import React, { useState } from "react";
import Graph from "react-graph-vis";
import "./App.css";

function App() {
  const [roads, setRoads] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [cost, setCost] = useState("");
  const [start, setStart] = useState("");
  const [mstData, setMstData] = useState(null);
  const [mstSteps, setMstSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const addRoad = () => {
    if (!from || !to || !cost) return alert("Please fill all fields");
    const newRoad = { 
      id: Date.now().toString() + Math.random(), 
      from, 
      to, 
      cost: parseInt(cost) 
    };
    setRoads(prev => [...prev, newRoad]);
    setFrom(""); 
    setTo(""); 
    setCost("");
  };

  const generateMST = async () => {
    if (!start) return alert("Please enter start village");
    const response = await fetch("https://prims-smart-road-planner-backend.onrender.com/mst", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roads, start })
    });
    const data = await response.json();
    setMstData({ mst: data.mst || [], totalCost: data.totalCost || 0 });
    setMstSteps(data.steps || []);
    setCurrentStepIndex(0);
  };

  const nodeNames = Array.from(new Set(roads.flatMap(r => [r.from, r.to])));
  const nodes = nodeNames.map(name => ({
    id: name,
    label: name,
    shape: "circularImage",
    image: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    size: 25,
    font: { color: "white" }
  }));

  const edges = roads.map((road, index) => {
    let color = "#888", width = 2;

    if (mstData?.mst?.some(e =>
      (e.from === road.from && e.to === road.to) || 
      (e.from === road.to && e.to === road.from)
    )) { 
      color = "#00ff00"; 
      width = 4; 
    }

    if (mstSteps.length > 0 && mstSteps[currentStepIndex]) {
      const step = mstSteps[currentStepIndex];

      if (step.chosen && (
        (step.chosen.from === road.from && step.chosen.to === road.to) ||
        (step.chosen.from === road.to && step.chosen.to === road.from)
      )) { 
        color = "#00ff00"; 
        width = 5; 
      }

      step.candidates?.forEach(c => {
        if (
          (c.from === road.from && c.to === road.to) ||
          (c.from === road.to && c.to === road.from)
        ) {
          color = "#ff9900"; 
          width = 3;
        }
      });
    }

    return { 
      id: road.id + "_" + index, 
      from: road.from, 
      to: road.to, 
      label: road.cost.toString(), 
      color: { color }, 
      width 
    };
  });

  const graph = { nodes, edges };

  const options = { 
    layout: { hierarchical: false }, 
    edges: { smooth: true }, 
    physics: { enabled: true }, 
    height: "100%" 
  };

  const nextStep = () => { 
    if (currentStepIndex < mstSteps.length - 1) 
      setCurrentStepIndex(currentStepIndex + 1); 
  };

  const prevStep = () => { 
    if (currentStepIndex > 0) 
      setCurrentStepIndex(currentStepIndex - 1); 
  };

  const mstNodes = nodes;

  const mstEdges = mstSteps.slice(0, currentStepIndex + 1).map((step, idx) => ({
    id: `mst_${idx}`,
    from: step.chosen.from,
    to: step.chosen.to,
    color: { color: "#00ff00" },
    width: 4,
    label: ""
  }));

  const mstGraph = { nodes: mstNodes, edges: mstEdges };

  return (
    <>
    
      {/* 🚗 Car Background Element Added (Matches CSS) */}
      <div className="car-background"></div>
      <div className="petals">
  <div className="petal"></div>
  <div className="petal"></div>
  <div className="petal"></div>
  <div className="petal"></div>
  <div className="petal"></div>
</div>

{/* ✅ Add this below petals */}
<div className="rain">
  <div className="drop"></div>
  <div className="drop"></div>
  <div className="drop"></div>
  <div className="drop"></div>
  <div className="drop"></div>
  <div className="drop"></div>
  <div className="drop"></div>
</div>


      <div className="dashboard">
        <div className="left-panel">
          <div className="card">
            <h2>Smart Road Planner</h2>

            <h4>Start Village</h4>
            <input 
              value={start} 
              onChange={e => setStart(e.target.value)} 
              placeholder="Enter Start Village" 
            />

            <h4>Add Road</h4>
            <input 
              value={from} 
              onChange={e => setFrom(e.target.value)} 
              placeholder="From" 
            />
            <input 
              value={to} 
              onChange={e => setTo(e.target.value)} 
              placeholder="To" 
            />
            <input 
              value={cost} 
              onChange={e => setCost(e.target.value)} 
              placeholder="Cost" 
              type="number" 
            />

            <button onClick={addRoad}>Add Road</button>
            <button onClick={generateMST}>Generate MST</button>
          </div>
        </div>

        <div className="right-panel">
          <div className="top-right" style={{ flex: "0 0 40%" }}>
            <h3>Road Network</h3>
            <Graph 
              key={JSON.stringify(roads)} 
              graph={graph} 
              options={options} 
            />
          </div>

          <div className="bottom-right" style={{ flex: "1", display: "flex", gap: "10px" }}>
            {mstSteps.length > 0 && (
              <>
                <div className="steps" style={{ flex: "0 0 35%" }}>
                  <h3>MST Step-by-Step</h3>

                  {mstData && (
                    <p className="total-cost">
                      Total MST Cost: {mstData.totalCost}
                    </p>
                  )}

                  <div>
                    <button 
                      onClick={prevStep} 
                      disabled={currentStepIndex === 0}
                    >
                      Previous Step
                    </button>

                    <button 
                      onClick={nextStep} 
                      disabled={currentStepIndex === mstSteps.length - 1}
                    >
                      Next Step
                    </button>
                  </div>

                  <p>
                    Step {currentStepIndex + 1} / {mstSteps.length}
                  </p>

                  {mstSteps[currentStepIndex]?.chosen && (
                    <p>
                      Chosen Edge: {mstSteps[currentStepIndex].chosen.from} → {mstSteps[currentStepIndex].chosen.to} | 
                      Cost: {mstSteps[currentStepIndex].chosen.cost}
                    </p>
                  )}
                </div>

                <div className="mst-graph" style={{ flex: "1", height: "100%" }}>
                  <Graph 
                    key={currentStepIndex} 
                    graph={mstGraph} 
                    options={{ ...options, physics: false }} 
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
