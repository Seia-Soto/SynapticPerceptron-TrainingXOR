const fs = require('fs')
const path = require('path')
const synaptic = require('synaptic')

const {Neuron, Layer, Network, Trainer, Architect} = synaptic

// NOTE: STatics:
const trainingSet = [
  {
    input: [0,0],
    output: [0]
  },
  {
    input: [0,1],
    output: [1]
  },
  {
    input: [1,0],
    output: [1]
  },
  {
    input: [1,1],
    output: [0]
  }
]
const modelLocation = path.join(__dirname, 'model.json')

// NOTE: Training:
const net = new Architect.Perceptron(2, 2, 1)
const trainer = new Trainer(net)

trainer.train(trainingSet)

fs.writeFileSync(modelLocation, JSON.stringify(net.toJSON()), 'utf8')

console.log('Done traning! Network saved to: ' + modelLocation)
