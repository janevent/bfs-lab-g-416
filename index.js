function bfs(rootNode, vertices, edges){
  let startEdges = edges.filter( (edge) => {
    return edge[0] === rootNode.name ||  edge[1] === rootNode.name
  })
  
  let startVertices = vertices.filter( (vertix) => {
    return startEdges.map ( (edge) => {
      return vertix.name === edge[0] || vertix.name === edge[1]
    })
  })
  
  return startVertices.map( (rootVertice) => {
    return rootVertice
  })
}

function findAdjacent(rootPoint, vertices, edges){
  console.log('rootPoint', rootPoint)
  let theEdges = edges.filter( (edge) => {
    //console.log('edge[0]', edge[0])
    return edge[0] === rootPoint || edge[1] === rootPoint
  })
  console.log('theEdges:', theEdges)
  return vertices.filter( (vertix) => { 
    if(vertix.name !== rootPoint){
      console.log('theEdges:', theEdges)
      return  theEdges.map( (e) => {
        console.log('e:', e)
        console.log('vertixname', vertix.name)
        console.log('return value',  vertix.name === e[0] || vertix.name === e[1] )
      })  
    }
  });
  //console.log('arrayOfVertices:', arrayOfVertices)
  //return arrayOfVertices
}
