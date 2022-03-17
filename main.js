console.log('hola');


const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ],
    modifiers: {
        "weakness": ["fire, ice", "flying", "psychic"],
        "resistances": ["water", "grass", "electric", "fighter"]
    }
}

const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
        "primary": "Blaze",
        "hidden": "Solar Power"
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65
    },
    moves: [
        "Growl", "Scratch", "Flamethrower", "Dragon Breath"
    ],
    modifiers: {
        "weakness": ["water", "ground", "rock"],
        "resistances": ["fire", "ice", "grass", "steal"]
    }
}

const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
        "primary": "Torrent",
        "hidden": "Rain Dish"
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
    },
    moves: [
        "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ],
    modifiers: {
        "weakness": ["electric", "grass"],
        "resistances": ["water", "fire", "ice", "steel"]
    }
}

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
    modifiers: {
        "weakness": ["ground"],
        "resistances": ["electric", "flying", "water", "steel"]
    }
}


const getMoves = objetoPokemon => {
    const { moves } = objetoPokemon
    return moves
}

const getPrimaryAbility = objetoPokemon => {
    const { ability } = objetoPokemon
    const { primary } = ability;
    return primary
}
const getWeaknesses = objetoPokemon => {
    const { modifiers } = objetoPokemon;
    const { weakness } = modifiers;
    return weakness

}
const getResistances = objetoPokemon => {
    const { modifiers } = objetoPokemon;
    const { resistances } = modifiers;
    return resistances
}
const pokemonType = (objetoPokemon, tipo) => {
    const { type } = objetoPokemon;
    return type === tipo
}

const resistType = (objetoPokemon, tipo) => {
    const { modifiers } = objetoPokemon;
    const { resistances } = modifiers;
    return resistances.some(poderes => poderes === tipo)
}

const resistMove = (pokemon, movimiento) => {

}

const isWekAgainst = (atacante, defensor) => {
    const { stats: nivelesAtacante } = atacante
    const { attack } = nivelesAtacante
    const { stats: nivelesDefensor } = defensor;
    const { deffense } = nivelesDefensor;
    return attack > deffense
}

const isStrongAgainst = (atacante, defensor) => {
    const { stats: nivelesAtacante } = atacante
    const { attack } = nivelesAtacante
    const { stats: nivelesDefensor } = defensor;
    const { deffense } = nivelesDefensor;
    return attack < deffense
}

console.log(getPrimaryAbility(pikachu))
console.log(getWeaknesses(pikachu))
console.log(getResistances(pikachu))
console.log('Pikachu es de tipo water:', pokemonType(pikachu, "water"))
console.log('Charmander es de tipo fire:', pokemonType(charmander, "fire"))
console.log('Bulbasaur es de tipo grass:', pokemonType(bulbasaur, "grass"))
console.log('Pikachu es resistente contra water: ', resistType(pikachu, 'water'))
console.log('Pikachu es resistente contra grass: ', resistType(pikachu, 'grass'))


console.log(isWekAgainst(pikachu, charmander))
console.log(isStrongAgainst(pikachu, squirtle))




const addAbility = (pokemon, habilidad) => {
    const {ability} = pokemon
    const abilityPro = {...ability, ...habilidad}
    pokemon['ability'] = abilityPro
    return pokemon
}

// No se me ocurre otra forma de hacerlo que no sea usando notacion corchetes o punto. 



console.log(addAbility(pikachu,{secondary:'Discharge'}))


const addMove = (pokemon, movimiento) => {
    const {moves} = pokemon;
    const movimientos = [...moves, ...movimiento];
    pokemon.moves = movimientos
    return pokemon
}

// No se me ocurre otra forma de hacerlo que no sea usando notacion corchetes o punto. 


console.log(addMove(pikachu,['Run']))

const removeMove = (pokemon, movimiento) => {
    const {moves} = pokemon;
    const movEliminado = moves.filter((mov)=> {
        return mov !== movimiento
    })
    pokemon.moves = movEliminado
    return pokemon
}

console.log(removeMove(squirtle, 'Tail Whip'))


const getAttackModifier = (objeto2propiedades) => {
    

}