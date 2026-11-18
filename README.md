# 🛣️ PRIMS – Smart Road Planner
### An Interactive Minimum Spanning Tree (MST) Visualization Platform Using Prim's Algorithm

![Project](https://img.shields.io/badge/Project-Smart%20Road%20Planner-blue)
![Algorithm](https://img.shields.io/badge/Algorithm-Prim's%20Algorithm-green)
![Frontend](https://img.shields.io/badge/Frontend-React%2019-61DAFB)
![Backend](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express%205-339933)
![Status](https://img.shields.io/badge/Status-Academic%20Project-orange)

## 📌 Overview

**PRIMS – Smart Road Planner** is an interactive web-based application designed to demonstrate how minimum-cost road networks can be planned using **Prim's Minimum Spanning Tree (MST) Algorithm**.

The project focuses on connecting multiple locations with the minimum possible total road cost while ensuring that every location is reachable without creating unnecessary cycles.

It combines Data Structures and Algorithms (DSA), graph theory, backend computation, and interactive graph visualization to make complex algorithmic concepts easier to understand.

The application demonstrates how graph-based algorithms can support cost-efficient infrastructure and road network planning.

## 🎯 Objectives

- Understand and implement Prim's Minimum Spanning Tree algorithm.
- Identify the minimum-cost connections between multiple locations.
- Minimize the overall connection cost of a network.
- Visualize graph traversal and edge selection step by step.
- Demonstrate the practical application of graph theory in road planning.
- Build an interactive full-stack application using React and Node.js.

## ✨ Key Features

- **Interactive Graph Visualization:** Visual representation of locations (vertices) and road connections (edges).
- **Prim's Algorithm:** Calculates the Minimum Spanning Tree using a greedy approach.
- **Step-by-Step Execution:** Displays intermediate algorithm states during execution.
- **Minimum Cost Calculation:** Determines the minimum total weight required to connect all vertices.
- **Visited Node Tracking:** Shows which vertices have been included in the MST.
- **Candidate Edge Tracking:** Identifies eligible edges crossing the visited and unvisited sets.
- **Selected Edge Highlighting:** Displays the minimum-weight edge selected at each step.
- **Interactive Graph Interface:** Uses graph visualization to make algorithm execution easier to understand.
- **Client-Server Architecture:** Separates frontend visualization from backend algorithm computation.

## 🧠 Algorithm – Prim's Minimum Spanning Tree

Prim's Algorithm is a greedy graph algorithm used to find a Minimum Spanning Tree of a connected, weighted, undirected graph.

### How It Works

1. Start with an initial vertex.
2. Mark the selected vertex as visited.
3. Find all eligible edges connecting visited vertices to unvisited vertices.
4. Select the edge with the minimum weight.
5. Add the selected edge to the Minimum Spanning Tree.
6. Mark the newly connected vertex as visited.
7. Repeat until all vertices are connected.

### Algorithm Complexity

The current implementation uses an adjacency-list representation and scans eligible edges during each iteration.

| Complexity | Current Implementation |
|---|---|
| Time Complexity | O(V × E) |
| Trace Space Complexity | O(V × E) |

Where:
- V = Number of vertices.
- E = Number of edges.

**Future Optimization:** A Priority Queue (Min-Heap) can be introduced to improve the algorithm's time complexity to O(E log V).

## 🏗️ System Architecture

The application follows a decoupled client-server architecture.

### Frontend
- React.js 19
- JavaScript
- CSS
- React Graph Vis
- Vis.js

### Backend
- Node.js
- Express.js 5
- REST API
- Graph processing and Prim's Algorithm

### Architecture Flow

1. The user interacts with the React application.
2. Graph information is maintained in frontend state.
3. The frontend sends a request to the backend through a REST API.
4. The Express server processes the graph using Prim's Algorithm.
5. The backend generates intermediate execution states.
6. The computed results are returned to the frontend.
7. The frontend visualizes the selected edges and algorithm execution.

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Programming Language | JavaScript |
| Frontend | React.js 19 |
| Backend | Node.js, Express.js 5 |
| API | REST API |
| Graph Visualization | React Graph Vis, Vis.js |
| Styling | CSS |
| Algorithm | Prim's Minimum Spanning Tree |
| Data Structure | Adjacency List |
| Development Tools | npm, Git, GitHub |

## 📂 Project Structure

```text
PRIMS-Smart-Road-Planner/
│
├── mst-backend/
│   ├── server.js
│   └── package.json
│
├── mst-frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── App.test.js
│   │   └── html.html
│   └── package.json
│
└── README.md
```

*Note: Adjust the folder names if your actual repository uses different names.*

## 🔌 API Information

The backend exposes a REST API for Minimum Spanning Tree computation.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/mst` | Processes graph data and calculates the Minimum Spanning Tree |

The API returns the computed result and intermediate execution information used by the frontend visualization.

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- A modern web browser

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd smart-road-planner
```

### 3. Start the Backend

```bash
cd mst-backend
npm install
node server.js
```

### 4. Start the Frontend

Open another terminal:

```bash
cd mst-frontend
npm install
```

Run the frontend using the start script defined in its `package.json`:

```bash
npm start
```

If the project uses Vite, use:

```bash
npm run dev
```

**Note:** The frontend currently references a deployed Render backend URL. For local development, configure the API URL to point to your local backend server.

## 📊 Applications

- Smart road network planning.
- Minimum-cost infrastructure connectivity.
- Network topology optimization.
- Transportation network design.
- Graph algorithm learning and visualization.
- Understanding greedy algorithm applications.

## 🔮 Future Enhancements

- Integrate a Priority Queue (Min-Heap) for better algorithm performance.
- Add real-world geographical map integration.
- Support multiple graph algorithms such as Kruskal's Algorithm and Dijkstra's Algorithm.
- Introduce interactive location selection.
- Add dynamic road distance and cost estimation.
- Implement improved input validation and error handling.
- Add automated unit and integration testing.
- Introduce persistent storage for saving road network configurations.

## 🎓 Learning Outcomes

Through this project, I gained practical experience in:

- Graph Theory and Minimum Spanning Trees.
- Prim's Greedy Algorithm.
- Data Structures and Algorithm Analysis.
- Time and Space Complexity.
- Full Stack Development.
- REST API Integration.
- React State Management.
- Backend Algorithm Implementation.
- Interactive Data Visualization.
- Client-Server Architecture.

## 👨‍💻 Author

**Shaik Hiba Tarunnum**

B.Tech Student | Full Stack Development | Artificial Intelligence

GitHub: [Your GitHub Profile](https://github.com/HibaShaik13/)

---

⭐ If you find this project interesting, consider giving it a star!

**PRIMS – Smart Road Planner: Making Road Network Planning Smarter Through Algorithms.**
