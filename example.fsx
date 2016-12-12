#load "packages/FsLab/Themes/DefaultWhite.fsx"
#load "packages/FsLab/FsLab.fsx"

open Deedle
open RDotNet
open RProvider
open RProvider.``base``
open RProvider.datasets
// open RProvider.neuralnet
// open RProvider.caret
open RProvider.graphics
open RProvider.rnn

// open RProvider.utils
// R.help("predictr")

let maxCharsgen = 100

let loadData file =
  System.IO.File.ReadLines(file)
  |> Seq.toList


let sents = loadData "data/phrases.txt"

let initVocab sents countTreshold =
  let d = Map.empty<char,int>
  sents
  |> Seq.collect id
  |> Seq.fold (fun d c -> 
    let v = Map.tryFind c d
    match v with 
    | None -> Map.add c 1 d
    | Some n -> Map.add c (n+1) d
  ) d
  |> Map.filter (fun k v -> v >= countTreshold)
  |> (fun x -> printfn "%d   %A" (x |> Map.toList |> List.length) x; x)
  |> Map.fold (fun (c2i,i2c,voc, idx) c _ -> (Map.add c idx c2i, Map.add idx c i2c, c :: voc, idx + 1 )) 
      (Map.empty<char, int>, Map.empty<int, char>, [], 1)
  |> (fun (a,b,c, _) -> (a,b,c)) 


let charToIndex, indexToChar, vocab = initVocab sents 1

let inputSize = 1 + List.length vocab
let outputsize = inputSize

let epochSize = List.length sents

let initModel inputSize letterSize = 



let lstm = R.trainr(yBin, x , 0.05,  hidden__dim=10)