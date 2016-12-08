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



open Deedle
open RDotNet
open RProvider
open RProvider.``base``
open RProvider.datasets
open RProvider.neuralnet
open RProvider.caret
open RProvider.graphics
 
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

let nn = 
    R.neuralnet(
        "Species ~ Sepal.Length + Sepal.Width + Petal.Length + Petal.Width", 
        data = trainingSet, hidden = R.c(3,2), 
        err_fct = "ce", linear_output = true)
 
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