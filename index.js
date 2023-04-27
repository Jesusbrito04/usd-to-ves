const bcv = () => fetch("https://s3.amazonaws.com/dolartoday/data.json").then(res => res.json)

module.exports = {
    bcv,
}