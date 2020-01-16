class Graph{
  constructor(vertices){
    this.vertices = vertices
    this.adjacencyList = new Map
  }
addVertex(v){
  this.adjacencyList.set(v,[])
}
addEdge(v,w){
  this.adjacencyList.get(v).push(w)
  this.adjacencyList.get(w).push(v)
}
print(){ 
    var keys = this.adjacencyList.keys(); 
    for (var i of keys)  
{ 
        var values = this.adjacencyList.get(i); 
        var conc = ""; 
        for (var j of values) 
            conc += j + " "; 
        console.log(i + ":" + conc); 
    } 
} 

dfs(root) 
{ 
  
    var visited = []; 
    for (var i = 0; i < this.vertices; i++) 
        visited[i] = false; 
  
    this.dfsHelper(root, visited); 
} 

dfsHelper(vert, visited) 
{ 
    visited[vert] = true; 
    console.log(vert); 
    this.adjacencyList.delete(vert)
  
    var neighbours = this.adjacencyList.get(vert); 
  
    for (var i in neighbours) { 
        var element = neighbours[i]; 
        if (!visited[element]) 
            this.dfsHelper(element, visited); 
    } 
} 

}

var g = new Graph(8); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
  
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
g.addEdge('C', 'F');
g.addEdge('B', 'C'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'B'); 
g.addEdge('A', 'E'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
 
g.print(); 
g.dfs('F')
g.print()