#load "packages/FsLab/Themes/DefaultWhite.fsx"
#load "packages/FsLab/FsLab.fsx"

open RDotNet
open RProvider
open FSharp.Data

open RProvider.``base``
open RProvider.graphics

let data = [ for x in 0. .. 0.1 .. 10. -> x * cos x ]

R.plot (data)

let wb = WorldBankData.GetDataContext()

[ for y in 2008 .. 2017 
    -> wb.Countries.Romania.Indicators.``Adequacy of social protection and labor programs (% of total welfare of beneficiary households)``.[y]
]
|> R.barplot


let sample = query {
      for c in wb.Countries do
      where (c.Indicators.``Population, total``.[2010] > 20000000.0)
      select c} |> Seq.toArray
  
