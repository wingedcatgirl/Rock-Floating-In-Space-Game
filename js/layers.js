addLayer("You", {
    name: "You", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "@", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    //prestigeButtonText() {return "Take a breath"},
    color: "#ABCDEF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "flux", // Name of prestige currency
    baseResource: "breath", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('You',12)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "[b]: Convert breath to flux", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
             ],
    upgrades: 
        {
            11:
                {
                title: "Deep  breathing",
                description: "Breath gain is doubled",
                cost: new Decimal(1),
                },
            12:
                {
                title: "Clear breathing",
                description: "Flux gain is doubled",
                cost: new Decimal(1),
                },
        },
    
    layerShown(){return true}
})


addLayer("I", {
    name:       "Islets",   // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol:     "I",        // This appears on the layer's node. Default is the id with the first letter capitalized
    row: 1,                 // Row the layer is in on the tree (0 is the first row)
    position:   0,          // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#99EF99",
    requires: new Decimal(10),   // Can be a function that takes requirement increases into account
    resource: "islets",          // Name of prestige currency
    baseResource: "flux",        // Name of resource prestige is based on
    branches: ["You"],
    baseAmount() {return player.You.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5,  // Prestige currency exponent
    gainMult() {    // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    hotkeys: [
        {key: "i", description: "[i]: With flux, discover an islet", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
             ],
    upgrades: 
        {
        11:
            {
            title: "Test upgrade",
            description: "Test the test upgrade",
            cost: new Decimal(1),
            },
        },
    
    layerShown(){return true}
})
