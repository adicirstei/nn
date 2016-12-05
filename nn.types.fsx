type Neuron = {
  weight : float
  biases : float
}

type Layer = Neuron list


type Network =  { 
  inputLayer : Layer
  hiddenLayers : Layer list
  outputLayer : Layer
}