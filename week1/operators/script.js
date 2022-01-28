function checkBetterOption() {
    const kms = document.getElementById('kms').value
    const oc = document.getElementById('oc').value
    const of = document.getElementById('of').value
    const od = document.getElementById('od').value
    const cs = document.getElementById('cs').value
    const cb = document.getElementById('cb').value
    const cm = document.getElementById('cm').value
    const cd = document.getElementById('cd').value

    const onlineCost = oc + (kms - of) * od
    const classicCost = cb + (kms / cs)*cm + (kms * cd)

    document.getElementById("outputDiv").innerText = `you shoud pick ${onlineCost > classicCost?"Online":"classic"} taxi`
}