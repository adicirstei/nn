#load "packages/FsLab/Themes/DefaultWhite.fsx"
#load "packages/FsLab/FsLab.fsx"

// open RProvider.utils
// R.install_packages("MASS")
// R.install_packages("pbkrtest")
// R.install_packages("lattice")
// R.install_packages("Matrix")
// R.install_packages("mgcv")
// R.install_packages("grid")
// R.install_packages("neuralnet")
// R.install_packages("caret")
// R.install_packages("zoo")
// R.install_packages("rnn")


open Deedle
open RDotNet
open RProvider
open RProvider.``base``
open RProvider.datasets
open RProvider.neuralnet
open RProvider.caret
open RProvider.graphics
open RProvider.rnn




let iris : Frame<int, string> = R.iris.GetValue()

let features =
    iris
    |> Frame.filterCols (fun c _ -> c <> "Species")
    |> Frame.mapColValues (fun c -> c.As<double>())
let targets =
    R.as_factor(iris.Columns.["Species"])
 
R.featurePlot(x = features, y = targets, plot = "pairs")

iris.ReplaceColumn("Species", targets.AsNumeric())
let range = [1..iris.RowCount]
let trainingIdxs : int[] = R.sample(range, iris.RowCount*7/10).GetValue()
let testingIdxs : int[] = R.setdiff(range, trainingIdxs).GetValue()
let trainingSet = iris.Rows.[trainingIdxs]
let testingSet = iris.Rows.[testingIdxs]

let x1 = R.sample([0..127], 7000, true)
let x2 = R.sample([0..127], 7000, true)
let y = Frame.zip (+) (x1.GetValue()) (x2.GetValue())





let y = 
    Frame.zip
    

R.int2bin (R.sample([0..127], 7000, true), length=8) 


let y

let lstm = R.trainr(y,  , 0.05, network__type="lstm")


let nn = 
    R.neuralnet(
        "Species ~ Sepal.Length + Sepal.Width + Petal.Length + Petal.Width", 
        data = trainingSet, hidden = R.c(10,5, 5), 
        err_fct = "ce", linear_output = true, lifesign="full")
 
// Plot the resulting neural network with coefficients
R.eval(R.parse(text="library(grid)"))

R.plot nn

let testingFeatures = 
    testingSet
    |> Frame.filterCols (fun c _ -> c <> "Species") 
    |> Frame.mapColValues (fun c -> c.As<double>())
let testingTargets = 
    testingSet.Columns.["Species"].As<int>().Values

let prediction = 
    R.compute(nn, testingFeatures)
     .AsList().["net.result"].AsVector() 
    |> Seq.cast<double>
    |> Seq.map (round >> int)

let misclassified = 
    Seq.zip prediction testingTargets
    |> Seq.filter (fun (a,b) -> a<>b)
    |> Seq.length
 
printfn "Misclassified irises '%d' of '%d'" misclassified (testingSet.RowCount)