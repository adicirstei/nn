var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory20);
var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d, i) { 
      return i; 
    }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

function render (graph) {
  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.connections)
    .enter().append("line")
      .attr("stroke-width", 2);
  

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.neurons)
    .enter().append("circle")
      .attr("r", 5)
      .attr("fill", function(d) { return color(d.layer); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  node.append("title")
      .text(function(d, i) { return  d.layer + i ; });

  simulation
      .nodes(graph.neurons)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.connections);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }
}
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
function LSTM() {
 
  var d = {"neurons":[{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":0.08950358788594656,"layer":"input","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":-0.08701906067379067,"layer":"input","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"0","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"0","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"0","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"1","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"1","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"1","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":-0.03984501594864982,"layer":"2","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":0.03549490518700221,"layer":"2","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":0.03254924334838036,"layer":"2","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"3","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"3","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"3","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"4","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"4","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"5","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"5","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":0.07830679682059608,"layer":"6","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":0.05673892145298756,"layer":"6","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"7","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":1,"layer":"7","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":0.0037789936008658237,"layer":"output","squash":"LOGISTIC"},{"trace":{"elegibility":{"13126":0,"13128":0,"13130":0,"13189":0,"13191":0,"13199":0,"13201":0},"extended":{}},"state":0,"old":0,"activation":0,"bias":-0.07077686075527514,"layer":"output","squash":"LOGISTIC"}],"connections":[{source:"0",target:"8","weight":-0.00033943549625199687,"gater":"2"},{source:"0",target:"9","weight":0.0440705617797664,"gater":"3"},{source:"0",target:"10","weight":-0.03495681671096888,"gater":"4"},{source:"0",target:"2","weight":0.08304561044827899,"gater":null},{source:"0",target:"3","weight":0.08716444554249167,"gater":null},{source:"0",target:"4","weight":-0.027602850660493422,"gater":null},{source:"0",target:"5","weight":0.052507132367103415,"gater":null},{source:"0",target:"6","weight":0.060446448770444444,"gater":null},{source:"0",target:"7","weight":0.015838561057276615,"gater":null},{source:"0",target:"11","weight":0.00565015108911418,"gater":null},{source:"0",target:"12","weight":0.0575894876638651,"gater":null},{source:"0",target:"13","weight":0.028753724500424405,"gater":null},{source:"0",target:"18","weight":0.06305848480163243,"gater":"14"},{source:"0",target:"19","weight":0.05299060645029635,"gater":"15"},{source:"0",target:"14","weight":-0.0889190785583737,"gater":null},{source:"0",target:"15","weight":0.048995926809322826,"gater":null},{source:"0",target:"16","weight":0.03780064579086026,"gater":null},{source:"0",target:"17","weight":-0.08211023886960192,"gater":null},{source:"0",target:"20","weight":0.055033285171404794,"gater":null},{source:"0",target:"21","weight":-0.00597005889959927,"gater":null},{source:"0",target:"22","weight":0.015610464913331915,"gater":null},{source:"0",target:"23","weight":-0.04493781332591232,"gater":null},{source:"1",target:"8","weight":-0.023142106286152236,"gater":"2"},{source:"1",target:"9","weight":0.016470562313669168,"gater":"3"},{source:"1",target:"10","weight":-0.07393396074730713,"gater":"4"},{source:"1",target:"2","weight":-0.04306319609575802,"gater":null},{source:"1",target:"3","weight":0.028690281447069005,"gater":null},{source:"1",target:"4","weight":-0.06826571752757,"gater":null},{source:"1",target:"5","weight":0.022121978758760097,"gater":null},{source:"1",target:"6","weight":0.011943590719508373,"gater":null},{source:"1",target:"7","weight":0.012280240238662588,"gater":null},{source:"1",target:"11","weight":-0.06382975145409726,"gater":null},{source:"1",target:"12","weight":0.06443355604002643,"gater":null},{source:"1",target:"13","weight":0.0759343921657182,"gater":null},{source:"1",target:"18","weight":-0.056524223692923675,"gater":"14"},{source:"1",target:"19","weight":0.08285781105400183,"gater":"15"},{source:"1",target:"14","weight":0.08428233255831011,"gater":null},{source:"1",target:"15","weight":0.022132382922114988,"gater":null},{source:"1",target:"16","weight":-0.04965255579235848,"gater":null},{source:"1",target:"17","weight":0.05282379336492968,"gater":null},{source:"1",target:"20","weight":0.06847782468304722,"gater":null},{source:"1",target:"21","weight":-0.08180003258619864,"gater":null},{source:"1",target:"22","weight":0.06496470819690389,"gater":null},{source:"1",target:"23","weight":0.052178601801791985,"gater":null},{source:"8",target:"22","weight":-0.01407836993574621,"gater":"11"},{source:"8",target:"23","weight":-0.022327439191594634,"gater":"11"},{source:"8",target:"2","weight":-0.09958611916491839,"gater":null},{source:"8",target:"5","weight":0.037486366853094616,"gater":null},{source:"8",target:"11","weight":0.0669932122890847,"gater":null},{source:"8",target:"18","weight":0.009186763029562825,"gater":"14"},{source:"8",target:"19","weight":0.031521125624705076,"gater":"15"},{source:"8",target:"14","weight":0.008872441237383955,"gater":null},{source:"8",target:"15","weight":-0.02005317560478312,"gater":null},{source:"8",target:"16","weight":-0.005306377633386816,"gater":null},{source:"8",target:"17","weight":0.06758747306657736,"gater":null},{source:"8",target:"20","weight":0.030121673821422557,"gater":null},{source:"8",target:"21","weight":0.010468082263873107,"gater":null},{source:"8",target:"8","weight":1,"gater":"5"},{source:"9",target:"22","weight":0.0348630973021426,"gater":"12"},{source:"9",target:"23","weight":0.08736716904263009,"gater":"12"},{source:"9",target:"3","weight":-0.09070858898736751,"gater":null},{source:"9",target:"6","weight":0.007856339230559548,"gater":null},{source:"9",target:"12","weight":-0.07784935736855161,"gater":null},{source:"9",target:"18","weight":0.018404611237653204,"gater":"14"},{source:"9",target:"19","weight":-0.03398624361620621,"gater":"15"},{source:"9",target:"14","weight":-0.02893118451750594,"gater":null},{source:"9",target:"15","weight":0.057440804621114394,"gater":null},{source:"9",target:"16","weight":-0.004935881921780183,"gater":null},{source:"9",target:"17","weight":-0.06332580021172185,"gater":null},{source:"9",target:"20","weight":0.02285966240203549,"gater":null},{source:"9",target:"21","weight":0.01557899742707343,"gater":null},{source:"9",target:"9","weight":1,"gater":"6"},{source:"10",target:"22","weight":0.03333850860170079,"gater":"13"},{source:"10",target:"23","weight":0.08980551341971374,"gater":"13"},{source:"10",target:"4","weight":-0.015179404635153174,"gater":null},{source:"10",target:"7","weight":0.09246051596606328,"gater":null},{source:"10",target:"13","weight":-0.04798281566721379,"gater":null},{source:"10",target:"18","weight":0.09414697281984058,"gater":"14"},{source:"10",target:"19","weight":-0.05653568698017528,"gater":"15"},{source:"10",target:"14","weight":0.03403909805113542,"gater":null},{source:"10",target:"15","weight":0.009252254958123499,"gater":null},{source:"10",target:"16","weight":-0.05883611484202525,"gater":null},{source:"10",target:"17","weight":-0.042073940693111836,"gater":null},{source:"10",target:"20","weight":-0.010677801813129856,"gater":null},{source:"10",target:"21","weight":-0.07074870217749601,"gater":null},{source:"10",target:"10","weight":1,"gater":"7"},{source:"18",target:"22","weight":0.023098287659617786,"gater":"20"},{source:"18",target:"23","weight":-0.010237669210690165,"gater":"20"},{source:"18",target:"14","weight":0.028417628943108314,"gater":null},{source:"18",target:"16","weight":-0.0999820999678386,"gater":null},{source:"18",target:"20","weight":0.0040616851982086255,"gater":null},{source:"18",target:"18","weight":1,"gater":"16"},{source:"19",target:"22","weight":-0.08395786818309553,"gater":"21"},{source:"19",target:"23","weight":-0.0051497987611807405,"gater":"21"},{source:"19",target:"15","weight":0.011097320977154101,"gater":null},{source:"19",target:"17","weight":0.08669482494912814,"gater":null},{source:"19",target:"21","weight":0.06020966134916336,"gater":null},{source:"19",target:"19","weight":1,"gater":"17"}]}
  return d
}




var data = LSTM()
render (data)